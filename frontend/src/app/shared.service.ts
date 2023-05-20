import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000/";


  constructor(private http:HttpClient) { }

  authenticateUser(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.APIUrl}/login/`, {
      email,
      password
    });
  }

  login(username: string, password: string): Observable<any> {
    const data = {
      username: username,
      password: password
    };
    return this.http.post(`${this.APIUrl}/login/`, data);
  }


  signup(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.APIUrl}/signup/`, {
      email,
      password
    });
  }



    getDepList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/department/');
    }

    addDepartment(val:any){
      return this.http.post(this.APIUrl+'/department/',val);
    }

    updateDepartment(val:any){
      return this.http.put(this.APIUrl+'/department/',val);
    }

    deleteDepartment(id: number){
      return this.http.delete(this.APIUrl+'/department/'+id);
    }

    getEmpList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/employee/');
    }

    addEmployee(val:any){
      return this.http.post(this.APIUrl+'/employee/',val);
    }

    updateEmployee(val:any){
      return this.http.put(this.APIUrl+'/employee/',val);
    }

    deleteEmployee(id: number){
      return this.http.delete(this.APIUrl+'/employee/'+id);
    }

    getComList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/company/');
    }

    addCompany(val:any){
      return this.http.post(this.APIUrl+'/company/',val);
    }

    updateCompany(val:any){
      return this.http.put(this.APIUrl+'/company/',val);
    }

    deleteCompany(id: number){
      return this.http.delete(this.APIUrl+'/company/'+id);
    }

    getDesList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/designation/');
    }

    addDesignation(val:any){
      return this.http.post(this.APIUrl+'/designation/',val);
    }

    updateDesignation(val:any){
      return this.http.put(this.APIUrl+'/designation/',val);
    }

    deleteDesignation(id: number){
      return this.http.delete(this.APIUrl+'/designation/'+id);
    }

    getLocList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/location/');
    }

    addLocation(val:any){
      return this.http.post(this.APIUrl+'/location/',val);
    }

    updateLocation(val:any){
      return this.http.put(this.APIUrl+'/location/',val);
    }

    deleteLocation(id: number){
      return this.http.delete(this.APIUrl+'/location/'+id);
    }


    getAllDepartmentNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/department/');
    }

    getAllEmployeeNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/employee/');
    }

    getAllCompanyNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/company/');
    }

    getAllDesignationNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/designation/');
    }

    getAllLocationNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/location/');
    }



}
