import { Component, OnInit } from '@angular/core';
import { Cart } from '../classes/cart';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private bookService:BookService) { }
  cart:Cart =new Cart(1,"",2,1);
  cart1:Cart[] | undefined;
  message:any;
  ngOnInit(): void {
    this.showCart();
  }
  public showCart(){
    this.bookService.showCart().subscribe(data=>{this.cart1=data;});
   }

  
}
