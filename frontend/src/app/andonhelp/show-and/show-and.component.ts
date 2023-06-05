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


  convertToLocalTime(utcDateTime: string): Date | string {
    if (!utcDateTime) {
      return ''; // Return empty string or any default value you prefer
    }

    const utcDate = new Date(utcDateTime);
    const localTimezoneOffset = utcDate.getTimezoneOffset() * 60000; // Convert minutes to milliseconds
    const localDate = new Date(utcDate.getTime() - localTimezoneOffset);
    return localDate;
  }
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
        (el.login && el.login.toLowerCase().includes(searchText)) ||
        (el.ticket && el.ticket.toLowerCase().includes(searchText)) ||
        (el.category && el.category.toLowerCase().includes(searchText)) ||
        (el.sub_category && el.sub_category.toLowerCase().includes(searchText)) ||
        (el.andon_alerts && el.andon_alerts.toLowerCase().includes(searchText)) ||
        (el.andon_acknowledge && el.andon_acknowledge.toLowerCase().includes(searchText)) ||
        (el.andon_resolved && el.andon_resolved.toLowerCase().includes(searchText))
      );
    });
  }



}



