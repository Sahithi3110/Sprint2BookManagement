import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Register } from 'src/app/classes/register';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  constructor(private bookService:BookService) { }

  register : Register=new Register("","","","");
  message:any;
  

  ngOnInit(): void {
  }
  public addUser(){
   this.bookService.doRegistration(this.register).subscribe(data=>{this.message=data;});
  }
}

