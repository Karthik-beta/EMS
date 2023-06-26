import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000/";


  constructor(private http:HttpClient) { }

  authenticateUser(email: string, name: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.APIUrl}/login/`, {
      email,
      name,
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

    getAndList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/andon/');
    }

    addAnd(val:any){
      return this.http.post(this.APIUrl+'/andon/',val);
    }

    updateAnd(val:any){
      return this.http.put(this.APIUrl+'/andon/',val);
    }

    deleteAnd(id: number){
      return this.http.delete(this.APIUrl+'/andon/'+id);
    }

    getMachineList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/machine/');
    }

    addMachine(val:any){
      return this.http.post(this.APIUrl+'/machine/',val);
    }

    updateMachine(val:any){
      return this.http.put(this.APIUrl+'/machine/',val);
    }

    deleteMachine(id: number){
      return this.http.delete(this.APIUrl+'/machine/'+id);
    }

    getProductList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/product/');
    }

    addProduct(val:any){
      return this.http.post(this.APIUrl+'/product/',val);
    }

    updateProduct(val:any){
      return this.http.put(this.APIUrl+'/product/',val);
    }

    deleteProduct(id: number){
      return this.http.delete(this.APIUrl+'/product/'+id);
    }

    getBreakdowncategoryList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/breakdownCategory/');
    }

    addBreakdowncategory(val:any){
      return this.http.post(this.APIUrl+'/breakdownCategory/',val);
    }

    updateBreakdowncategory(val:any){
      return this.http.put(this.APIUrl+'/breakdownCategory/',val);
    }

    deleteBreakdowncategory(id: number){
      return this.http.delete(this.APIUrl+'/breakdownCategory/'+id);
    }

    getAssemblyLineList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/assemblyLine/');
    }

    addAssemblyLine(val:any){
      return this.http.post(this.APIUrl+'/assemblyLine/',val);
    }

    updateAssemblyLine(val:any){
      return this.http.put(this.APIUrl+'/assemblyLine/',val);
    }

    deleteAssemblyLine(id: number){
      return this.http.delete(this.APIUrl+'/assemblyLine/'+id);
    }

    getShopFloorList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/shopFloor/');
    }

    addShopFloor(val:any){
      return this.http.post(this.APIUrl+'/shopFloor/',val);
    }

    updateShopFloor(val:any){
      return this.http.put(this.APIUrl+'/shopFloor/',val);
    }

    deleteShopFloor(id: number){
      return this.http.delete(this.APIUrl+'/shopFloor/'+id);
    }

    getsubBreakdownCategoryList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/subBreakdownCategory/');
    }

    addsubBreakdownCategory(val:any){
      return this.http.post(this.APIUrl+'/subBreakdownCategory/',val);
    }

    updatesubBreakdownCategory(val:any){
      return this.http.put(this.APIUrl+'/subBreakdownCategory/',val);
    }

    deletesubBreakdownCategory(id: number){
      return this.http.delete(this.APIUrl+'/subBreakdownCategory/'+id);
    }

    getsubAssemblyLineList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/subAssemblyLine/');
    }

    addsubAssemblyLine(val:any){
      return this.http.post(this.APIUrl+'/subAssemblyLine/',val);
    }

    updatesubAssemblyLine(val:any){
      return this.http.put(this.APIUrl+'/subAssemblyLine/',val);
    }

    deletesubAssemblyLine(id: number){
      return this.http.delete(this.APIUrl+'/subAssemblyLine/'+id);
    }

    getProductreceipeList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/productReceipe/');
    }

    addProductreceipe(val:any){
      return this.http.post(this.APIUrl+'/productReceipe/',val);
    }

    updateProductreceipe(val:any){
      return this.http.put(this.APIUrl+'/productReceipe/',val);
    }

    deleteProductreceipe(id: number){
      return this.http.delete(this.APIUrl+'/productReceipe/'+id);
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

    getAllAndonNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/andon/');
    }

    getAllMachineNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/machine/');
    }

    getAllProductNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/product/');
    }

    getAllBreakdowncategoryNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/breakdownCategory/');
    }

    getAllAssemblyLineNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/assemblyLine/');
    }

    getAllShopFloorNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/shopFloor/');
    }

    getAllsubBreakdownCategoryNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/subBreakdownCategory/');
    }

    getAllsubAssemblyLineNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/subAssemblyLine/');
    }

    getAllProductreceipeNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/productReceipe/');
    }





}
