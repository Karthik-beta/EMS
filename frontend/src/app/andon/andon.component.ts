import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Emitters } from 'src/app/emitters/emitters';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-andon',
  templateUrl: './andon.component.html',
  styleUrls: ['./andon.component.css']
})
export class AndonComponent implements OnInit {

  constructor(
    private service: SharedService,
    private http: HttpClient
  ) { }

  andonList: any[] = [];
  andonListWithoutFilter: any[] = [];
  authenticated = false;
  username: string = '';
  isLoggedIn: boolean = false;
  and: any;
  searchText: string = "";
  selectedMachineId: string = "";

  @Input() andData: any;
  // and:any;
  login: string = "";
  machineId: string = "";
  ticket: string = "";
  category: string = "";
  sub_category: string = "";
  andon_alerts: string = "";
  andon_acknowledge: string = "";
  andon_resolved: string = "";

  categoryCompleted: boolean = false;
  subCategoryCompleted: boolean = false;
  andonAlertCompleted: boolean = false;
  andonAcknowledgeCompleted: boolean = false;

  onCategoryChange(index: number) {
    this.andonList[index].category = this.andonList[index].category;
    this.categoryCompleted = true;
    this.subCategoryCompleted = false;
    this.andonAlertCompleted = false;
    this.andonAcknowledgeCompleted = false;
  }

  onColumnChange(index: number): void {
    const lastIndex = this.andonList.length - 1;
    const lastItem = this.andonList[lastIndex];

    if (
      lastItem &&
      lastItem.machineId &&
      this.categoryCompleted &&
      this.subCategoryCompleted &&
      !this.andonAlertCompleted &&
      !this.andonAcknowledgeCompleted
    ) {
      this.andonAlertCompleted = true;
    } else if (
      lastItem &&
      lastItem.machineId &&
      this.categoryCompleted &&
      this.subCategoryCompleted &&
      this.andonAlertCompleted &&
      !this.andonAcknowledgeCompleted
    ) {
      this.andonAcknowledgeCompleted = true;
    } else {
      // Add an empty row to the list
      this.andonList.push({});
    }
  }



  // Track the current step in the data entry process
  currentStep: string = 'machineId';

  // Check if the current step is allowed to be filled
  isStepAllowed(step: string): boolean {
    const stepsOrder = [
      'machineId',
      'category',
      'sub_category',
      'andon_alerts',
      'andon_acknowledge',
      'andon_resolved'
    ];

    const currentIndex = stepsOrder.indexOf(step);
    const previousSteps = stepsOrder.slice(0, currentIndex);
    const isPreviousStepCompleted = previousSteps.every(
      step => this.isStepCompleted(step)
    );

    return isPreviousStepCompleted;
  }

  // Check if a step has been completed
  isStepCompleted(step: string): boolean {
    return this.andonList.some(item => !!item[step]);
  }

  // Handle the change event of the input fields
  onInputChange(step: string, index: number) {
    if (this.isStepAllowed(step)) {
      this.setCurrentStep(step, index);
    } else {
      // Clear the input value if the step is not allowed
      this.andonList[index][step] = '';
    }
  }

  // Set the current step and update the state accordingly
  setCurrentStep(step: string, index: number) {
    this.currentStep = step;
    this.updateStepStatus(step, index);
  }

  // Update the status of a step (completed or not completed)
  updateStepStatus(step: string, index: number) {
    const isCompleted = !!this.andonList[index][step];

    switch (step) {
      case 'machineId':
        this.categoryCompleted = isCompleted;
        this.subCategoryCompleted = false;
        this.andonAlertCompleted = false;
        this.andonAcknowledgeCompleted = false;
        break;
      case 'category':
        this.subCategoryCompleted = isCompleted;
        this.andonAlertCompleted = false;
        this.andonAcknowledgeCompleted = false;
        break;
      case 'sub_category':
        this.andonAlertCompleted = isCompleted;
        this.andonAcknowledgeCompleted = false;
        break;
      case 'andon_alerts':
        this.andonAcknowledgeCompleted = isCompleted;
        break;
    }
  }






  getShiftText(): string {
    const currentHour = new Date().getHours();
    let shiftText = '';

    if (currentHour >= 6 && currentHour < 14) {
      shiftText = 'Shift A : 6:00 AM to 2:00 PM';
    } else if (currentHour >= 14 && currentHour < 22) {
      shiftText = 'Shift B : 2:00 PM to 10:00 PM';
    } else {
      shiftText = 'Shift C : 10:00 PM to 6:00 AM';
    }

    return shiftText;
  }


  ngOnInit(): void {
    this.refreshAndList();
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
    this.andonList.forEach(() => {
      this.totalBreakdownTime.push(0); // Initialize totalBreakdownTime for each row with 0
    });
  }

  refreshAndList() {
    this.service.getAndList().subscribe(data => {
      this.andonList = data.map((item: any) => ({
        ...item,
        category: '',
      }));
      this.andonListWithoutFilter = this.andonList;
      this.filterData();
    });
  }

  filterData() {
    var searchText = this.searchText.toLowerCase();

    this.andonList = this.andonListWithoutFilter.filter(function (el: any) {
      return (
        (el.login && el.login.toString().toLowerCase().includes(searchText)) ||
        (el.machineId && el.machineId.toString().toLowerCase().includes(searchText)) ||
        (el.ticket && el.ticket.toString().toLowerCase().includes(searchText)) ||
        (el.category && el.category.toLowerCase().includes(searchText)) ||
        (el.sub_category && el.sub_category.toLowerCase().includes(searchText)) ||
        (el.andon_alerts && el.andon_alerts.toString().toLowerCase().includes(searchText)) ||
        (el.andon_acknowledge && el.andon_acknowledge.toString().toLowerCase().includes(searchText)) ||
        (el.andon_resolved && el.andon_resolved.toString().toLowerCase().includes(searchText))
      );
    });
  }


  totalBreakdownTime: number[] = [];

  startTotalBreakdownTimer(index: number) {
    setInterval(() => {
      if (this.andonAlertsToggled[index] && !this.andonResolvedToggled[index]) {
        this.totalBreakdownTime[index]++; // Increment the totalBreakdownTime
      }
    }, 1000);
  }


andonAlertsToggled: boolean[] = [];
andonAlertsClickTime: Date[] = [];

toggleAndonAlert(index: number) {
  this.andonAlertsToggled[index] = !this.andonAlertsToggled[index];
  if (this.andonAlertsToggled[index]) {
    // Record the current time
    this.andonAlertsClickTime[index] = new Date();

    // Start the total breakdown timer
    this.totalBreakdownTime[index] = 0; // Initialize the totalBreakdownTime
    this.startTotalBreakdownTimer(index);
  }
}


getAndonAlertText(index: number) {
  if (this.andonAlertsToggled[index]) {
    // Display the recorded click time
    return this.andonAlertsClickTime[index]?.toLocaleString() || '';
  } else {
    // Display "Raise alert"
    return "Raise alert";
  }
}

andonAcknowledgeToggled: boolean[] = [];
andonAcknowledgeClickTime: Date[] = [];

toggleAndonAcknowledge(index: number) {
  this.andonAcknowledgeToggled[index] = !this.andonAcknowledgeToggled[index];
  if (this.andonAcknowledgeToggled[index]) {
    // Record the current time
    this.andonAcknowledgeClickTime[index] = new Date();
  }
}

getAndonAcknowledgeText(index: number) {
  if (this.andonAcknowledgeToggled[index]) {
    // Display the recorded click time
    return this.andonAcknowledgeClickTime[index]?.toLocaleString() || '';
  } else {
    // Display "Acknowledge"
    return "Acknowledge";
  }
}

andonResolvedToggled: boolean[] = [];
andonResolvedClickTime: Date[] = [];

toggleAndonResolved(index: number) {
  this.andonResolvedToggled[index] = !this.andonResolvedToggled[index];
  if (this.andonResolvedToggled[index]) {
    // Record the current time
    this.andonResolvedClickTime[index] = new Date();

    // Stop the total breakdown timer
    clearInterval(this.totalBreakdownTime[index]);
  }
}


getAndonResolvedText(index: number) {
  if (this.andonResolvedToggled[index]) {
    // Display the recorded click time
    return this.andonResolvedClickTime[index]?.toLocaleString() || '';
  } else {
    // Display "Resolve"
    return "Resolve";
  }
}


formatTotalBreakdownTime(time: number): string {
  if (time === undefined || isNaN(time)) {
    return '00:00'; // Display "00:00" when time is undefined or NaN
  }

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const formattedTime = `${this.padZero(hours)}:${this.padZero(minutes)}`;
  return formattedTime;
}

padZero(num: number): string {
  return num.toString().padStart(2, '0');
}



  enterCurrentDateTime(field: string, index: number) {
    const currentDateTime = new Date().toISOString().slice(0, 16);
    const andonItem = this.andonList[index];

    switch (field) {
      case 'andon_alerts':
        if (andonItem.andon_alerts) {
          andonItem.andon_alerts = '';
        } else {
          andonItem.andon_alerts = currentDateTime;
        }
        break;
      case 'andon_acknowledge':
        if (andonItem.andon_acknowledge) {
          andonItem.andon_acknowledge = '';
        } else {
          andonItem.andon_acknowledge = currentDateTime;
        }
        break;
      case 'andon_resolved':
        if (andonItem.andon_resolved) {
          andonItem.andon_resolved = '';
        } else {
          andonItem.andon_resolved = currentDateTime;
        }
        break;
    }
  }

  addAnd() {
    const newAnd = {
      login: this.login,
      machineId: this.machineId,
      ticket: this.ticket,
      category: this.category,
      sub_category: this.sub_category,
      andon_alerts: this.andon_alerts,
      andon_acknowledge: this.andon_acknowledge,
      andon_resolved: this.andon_resolved
    };

    this.service.addAnd(newAnd).subscribe(() => {
      // Handle success or any additional actions
    });
  }

  updateAnd() {
    const updatedAnd = { /* construct the updated And object */ };
    this.service.updateAnd(updatedAnd).subscribe(() => {
      // Handle success or any additional actions
    });
  }

  deleteAnd(id: number) {
    this.service.deleteAnd(id).subscribe(() => {
      // Handle success or any additional actions
    });
  }

  getAllAndonNames() {
    this.service.getAllAndonNames().subscribe(names => {
      // Handle the response containing all Andon names
    });
  }
}
