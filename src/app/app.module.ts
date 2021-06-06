import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarHeaderComponent } from './navbar/navbar-header/navbar-header.component';
import { NavbarFooterComponent } from './navbar/navbar-footer/navbar-footer.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { CustomerRegistrationComponent } from './customer/customer-registration/customer-registration.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home/customer-home.component';
import { ListbooksComponent } from './listbooks/listbooks.component';
import { CartComponent } from './cart/cart.component';
import { PlaceOrderComponent } from './customer/place-order/place-order.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/compiler';

@NgModule({
  declarations: [
    AppComponent,
    NavbarHeaderComponent,
    NavbarFooterComponent,
    HomeComponent,
    CustomerLoginComponent,
    CustomerRegistrationComponent,
    CustomerHomeComponent,
    ListbooksComponent,
    CartComponent,
    PlaceOrderComponent,
    DebitCardComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule  ],
    // .forRoot([
    //   {path:"books",component:ListbooksComponent},
    //   {path:"register",component:RegistrationComponent},
    //   {path:"login",component:LoginComponent},
    //   {path:"home",component:HomeComponent},
    //   {path:"",redirectTo:"home",pathMatch:"full"}

  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
