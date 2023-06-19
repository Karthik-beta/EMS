import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(
    private service: SharedService
  ) { }

  andonList: any[] = [];

  ngOnInit(): void {
    this.refreshAndList();
  }


  refreshAndList() {
    this.service.getAndList().subscribe(data => {
      this.andonList = data;
    });
  }

}
