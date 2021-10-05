import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Log } from './log';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  log:Log[]=[]
  url="http://localhost:3000/users";

  constructor(private http:HttpClient) { }
  getusers(){
    return this.http.get(this.url).pipe(catchError(this.errorHandler))
  }
  postuser(user:Log){
    return this.http.post(this.url,user)
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error.message || 'server error')
  }
}
