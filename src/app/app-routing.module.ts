import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { CustomerRegistrationComponent } from './customer/customer-registration/customer-registration.component';
import { HomeComponent } from './home/home/home.component';
import { ListbooksComponent } from './listbooks/listbooks.component';

const routes: Routes = [
 
  {path:"register",component:CustomerRegistrationComponent},
  {path:"login",component:CustomerLoginComponent},
  {path:"home",component:HomeComponent},
  {path:"books",component:ListbooksComponent},
  {path:"cart",component:CartComponent},
  {path:"",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
