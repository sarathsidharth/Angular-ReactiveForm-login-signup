import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public logdata:any;
  hide=true; 
  constructor(private fb:FormBuilder,private service:AuthenticationService,
    private service1:RegisterService,private  router:Router) { }

  loginform=this.fb.group({
    name: new FormControl([""],Validators.required),
    password: new FormControl([""],[Validators.required,Validators.minLength(3)])
  })

  ngOnInit(): void {
  }

  login(){
    // const val=this.loginform.value;
    this.service1.getusers().subscribe((data:any)=>{
      const user=data.find((a:any)=>{
        console.log(a.email)
        return a.name===this.loginform.value.name && a.password===this.loginform.value.password
      })
      if(user){
        alert('login success');
        this.loginform.reset();
        this.router.navigate([''])    
      }else{alert("user not Found !!")}
    },(err)=>{alert('Something went wrong')})
  
  }

}
