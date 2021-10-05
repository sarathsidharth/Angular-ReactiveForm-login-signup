import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  hide=true;
  
  constructor(private fb:FormBuilder,private service:RegisterService,private router:Router) { }
  signupform=this.fb.group({
    name: new FormControl([""],Validators.required),
    gender: new FormControl([""]),
    email: new FormControl([""],[Validators.required,Validators.email]),
    phone: new FormControl([""],[Validators.required,Validators.pattern(new RegExp('[0-9]{10}'))]),
    password: new FormControl([""],[Validators.required,Validators.minLength(3)])
  })

  ngOnInit(): void {
  }

  signup(){
    if(this.signupform.valid){
      console.log(this.signupform.value)
      this.service.postuser(this.signupform.value)
      .subscribe((data)=>{
        alert('user Registered succesfully ');
        this.signupform.reset();
        this.router.navigate(['login'])
    },
      (err)=>{alert('something went wrong !!'+err)})
    }
  }

}
