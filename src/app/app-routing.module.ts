import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { SignupComponent } from './component/signup/signup.component';
import { WelcomePageComponent } from './component/welcome-page/welcome-page.component';

const routes: Routes = [
  {path:'',redirectTo:'login' ,pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"welcome/:name",component:WelcomePageComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
