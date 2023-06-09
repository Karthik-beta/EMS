import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Emitters } from 'src/app/emitters/emitters';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-show-and',
  templateUrl: './show-and.component.html',
  styleUrls: ['./show-and.component.css']
})
export class ShowAndComponent implements OnInit {


  authenticated = false;
  username: string = '';

  isLoggedIn: boolean = false;


  // convertToLocalTime(utcDateTime: string): Date | string {
  //   if (!utcDateTime) {
  //     return ''; // Return empty string or any default value you prefer
  //   }

  //   const utcDate = new Date(utcDateTime);
  //   const localTimezoneOffset = utcDate.getTimezoneOffset() * 60000; // Convert minutes to milliseconds
  //   const localDate = new Date(utcDate.getTime() - localTimezoneOffset);
  //   return localDate;
  // }
  constructor(private service: SharedService,
                private http: HttpClient) { }

  andonList: any=[];
  andonListWithoutFilter: any = [];

  ModalTitle: string = "";
  ActivateAddEditAndComp: boolean = false;
  and: any;
  searchText: string = "";

  ngOnInit(): void {
    this.refreshAndList();
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
  }





  addClick() {
    this.and = {
      ticket: 1000,
      login: "",
      machineId: "",
      category: "",
      sub_category: "",
      andon_alerts: "",
      andon_acknowledge: "",
      andon_resolved: "",
    };

    this.ModalTitle = "Add Ticket";
    this.ActivateAddEditAndComp = true;
  }

  editClick(item: any) {
    console.log(item);
    this.and = item;
    this.ModalTitle = "Edit Ticket";
    this.ActivateAddEditAndComp = true;
  }

  deleteClick(item: { ticket: any }) {
    if (confirm('Are you sure??')) {
      this.service.deleteAnd(item.ticket).subscribe(data => {
        alert(data.toString());
        this.refreshAndList();
      });
    }
  }

  closeClick() {
    this.ActivateAddEditAndComp = false;
    this.refreshAndList();
  }

  refreshAndList() {
    this.service.getAndList().subscribe(data => {
      this.andonList = data;
      this.andonListWithoutFilter = data;
      this.filterData();
    });
  }

  logout(): void {
    this.http.post('http://localhost:8000/api/logout', {}, {withCredentials: true})
      .subscribe(() => this.authenticated = false);
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













  @Input() andData:any;
  login:string="";
  machineId:string="";
  ticket:string="";
  category:string="";
  sub_category:string="";
  andon_alerts:string="";
  andon_acknowledge:string="";
  andon_resolved:string="";


  AndonList:any=[];




  loadAndonList() {
    this.service.getAllAndonNames().subscribe((data: any) => {
      this.AndonList = data;

      if (this.and) {
        this.login = this.and.login;
        this.machineId = this.and.machineId;
        this.ticket = this.and.ticket;
        this.category = this.and.category;
        this.sub_category = this.and.sub_category;
        this.andon_alerts = this.and.andon_alerts;
        this.andon_acknowledge = this.and.andon_acknowledge;
        this.andon_resolved = this.and.andon_resolved;
      }
    });
  }

  enterCurrentDateTime(field: string) {
    const currentDateTime = new Date().toISOString().slice(0, 16);
    switch (field) {
      case 'andon_alerts':
        this.andon_alerts = currentDateTime;
        break;
      case 'andon_acknowledge':
        this.andon_acknowledge = currentDateTime;
        break;
      case 'andon_resolved':
        this.andon_resolved = currentDateTime;
        break;
    }
  }




  addTicket() {
    var val = {
      login:this.login,
      machineId:this.machineId,
      ticket:this.ticket,
      category:this.category,
      sub_category:this.sub_category,
      andon_alerts:this.andon_alerts,
      andon_acknowledge:this.andon_acknowledge || null,
      andon_resolved:this.andon_resolved || null,
    };


    this.service.addAnd(val).subscribe(res=>{
      alert(res.toString());
    });
  }


    updateTicket() {
    var val = {
      Login:this.login,
      MachineId:this.machineId,
      Ticket:this.ticket,
      Category:this.category,
      Sub_Category:this.sub_category,
      Andon_alerts:this.andon_alerts,
      Andon_acknowledge:this.andon_acknowledge || null,
      Andon_resolved:this.andon_resolved || null,
    };


    this.service.updateAnd(val).subscribe((res:any)=>{
      alert(res.toString());
    });
  }



}



