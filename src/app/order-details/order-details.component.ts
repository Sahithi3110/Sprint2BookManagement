import { Component, OnInit } from '@angular/core';
import { Bookorder } from '../classes/bookorder';
import { BookService } from '../services/book.service';
import {orderId} from '../customer/place-order/place-order.component';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private bookService:BookService) { }
  //bookOrder:Bookorder[]| undefined;
  bookOrder:Bookorder=new Bookorder(0,0,new Date(2021, 1, 1),0,"","","","","");
  ngOnInit(): void {
    this.getOrderDetails();
  }

  public getOrderDetails(){
      this.bookService.getOrderDetails(orderId).subscribe((data:any)=>{this.bookOrder=data;})
  }

}
