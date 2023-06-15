import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contact } from './component/contactmodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //add
  addcontact(data:contact){
    return this.http.post<contact>("http://localhost:3000/posts", data)
  }
  //get
  getcontact(){
    return this.http.get<contact[]>("http://localhost:3000/posts")
  }
  //get
  getOneContact(id:number){
    return this.http.get<contact>("http://localhost:3000/posts/"+id)
  }
  //delete
  deletecontact(id:number){
    return this.http.delete<void>("http://localhost:3000/posts/"+id)
  }
  //edit
  fetchdate(id:number){
    return this.http.get<contact>("http://localhost:3000/posts/"+id)
  }
  //update
  updatecontact(data:contact, id:number){
    return this.http.put<contact>("http://localhost:3000/posts/"+id,data)
  }
}
