import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Log } from './log';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  log:Log[]=[]
  url="http://localhost:3000/user";

  constructor(private http:HttpClient) { }
  getusers(){
    return this.http.get(this.url)
  }
  postuser(user:Log){
    return this.http.post(this.url,user)
  }
}
