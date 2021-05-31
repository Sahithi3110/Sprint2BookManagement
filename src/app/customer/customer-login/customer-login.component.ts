import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Register } from 'src/app/classes/register';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor(private bookService:BookService) { }

  loginDetails: Register[] = [];
   loginForm:FormGroup | undefined;
  message:any;
  password :any;
  email:any;
  value=false;
  ngOnInit(): void {
    this.loginDetails=[];
    this.login();
   
  }
  public login(){
    this.bookService.login().subscribe((data: any[])=>{this.loginDetails=data;});
    this.loginDetails.forEach(val=>{
      if(this.email===val.email && this.password===val.password) 
         this.message="Logged In.......";
        else this.message="Email and Password doesnt match";
    });
  }

}


