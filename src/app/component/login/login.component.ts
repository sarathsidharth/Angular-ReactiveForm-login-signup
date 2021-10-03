import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide=true; 
  constructor(private fb:FormBuilder) { }

  loginform=this.fb.group({
    name: new FormControl([""],Validators.required),
    password: new FormControl([""],[Validators.required,Validators.minLength(3)])
  })

  ngOnInit(): void {
  }

  login(){
    if(this.loginform.valid){
      console.log(this.loginform.value)
     // this.studentservice.postdata(this.newStudentform.value).subscribe((data)=>{alert("data added")})
    }
  }

}
