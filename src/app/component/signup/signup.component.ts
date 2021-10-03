import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  hide=true;
  
  constructor(private fb:FormBuilder) { }
  signupform=this.fb.group({
    name: new FormControl([""],Validators.required),
    gender: new FormControl([""]),
    email: new FormControl([""],[Validators.required,Validators.email]),
    password: new FormControl([""],[Validators.required,Validators.minLength(3)])
  })

  ngOnInit(): void {
  }

  signup(){
    if(this.signupform.valid){
      console.log(this.signupform.value)
     // this.studentservice.postdata(this.newStudentform.value).subscribe((data)=>{alert("data added")})
    }
  }
}
