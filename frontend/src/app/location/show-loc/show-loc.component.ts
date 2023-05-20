import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-loc',
  templateUrl: './show-loc.component.html',
  styleUrls: ['./show-loc.component.css']
})
export class ShowLocComponent implements OnInit{
  constructor(private service:SharedService) { }

  LocationList:any=[];

  ModalTitle:string="";
  ActivateAddEditLocComp:boolean=false;
  loc:any;

  LocationIdFilter:string="";
  LocationNameFilter:string="";
  LocationListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshLocList();
  }

  addClick(){
    this.loc={
      LocationId: 0,
      LocationName:""
    }
    this.ModalTitle="Add Location";
    this.ActivateAddEditLocComp=true;

  }

  editClick(item: any){
    this.loc=item;
    this.ModalTitle="Edit Location";
    this.ActivateAddEditLocComp=true;
  }

  deleteClick(item: {LocationId: any;}){
    if(confirm('Are you sure??')){
      this.service.deleteLocation(item.LocationId).subscribe((data: any) => {
        alert(data.toString());
        this.refreshLocList();
      })
    }
  }




  closeClick(){
    this.ActivateAddEditLocComp=false;
    this.refreshLocList();
  }


  refreshLocList(){
    this.service.getLocList().subscribe(data=>{
      this.LocationList=data;
      this.LocationListWithoutFilter=data;
    });
  }

  FilterFn(){
    var LocationIdFilter = this.LocationIdFilter;
    var LocationNameFilter = this.LocationNameFilter;

    this.LocationList = this.LocationListWithoutFilter.filter(function (el:any){
        return el.LocationId.toString().toLowerCase().includes(
          LocationIdFilter.toString().trim().toLowerCase()
        )&&
        el.LocationName.toString().toLowerCase().includes(
          LocationNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop:any,asc:any){
    this.LocationList = this.LocationListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}
