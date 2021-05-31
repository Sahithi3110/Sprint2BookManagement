


import { Component, OnInit } from '@angular/core';
import { Book } from '../classes/book';
import { Cart } from '../classes/cart';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css']
})
export class ListbooksComponent implements OnInit {
 
  constructor(private bookService:BookService) { }
  books: Book[] | undefined;
  cart:Cart=new Cart(1,"",2,1);
  message:any;
  bookId:any;
  ngOnInit(): void {
    this.getBooks();
    
  }
  public addToCart(data: Book){
    this.bookService.addToCart(data).subscribe(()=>{this.message="Item added";});
   }

  public getBooks() {
    this.bookService.getBookList().subscribe(data=>{
      
        this.books=data;
        this.books.forEach(val=>{
          console.log(val);
        })
      
    });
  }
  
}
