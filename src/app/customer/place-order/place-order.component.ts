import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CartComponent } from 'src/app/cart/cart.component';
import { Bookorder } from 'src/app/classes/bookorder';
import { BookService } from 'src/app/services/book.service';
export var orderId=Math.floor(1000 + Math.random() * 9000);
@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit,OnChanges {
  constructor(private bookService:BookService) { }
  ngOnChanges(): void {
    this.isValid=!this.isValid;
  }
  ngOnInit(): void {
  }
  array: string[] = ["CashOnDelivery","DebitCard"];
  bookOrder:Bookorder=new Bookorder(0,0,new Date(2021, 1, 1),0,"","","","","");
  //orderId=Math.floor(1000 + Math.random() * 9000);
  orderID=orderId;
  isValid=false;

  
  public bookOrderDetails(){
    this.bookOrder.orderId = orderId;
    this.bookOrder.status="success";
    this.bookService.bookOrderDetails(this.bookOrder).subscribe((data:any)=>{this.bookOrder=data;});
    if(this.bookOrder.paymentMethod==="CashOnDelivery")
    this.isValid=!this.isValid;      
  }
  

  

}
