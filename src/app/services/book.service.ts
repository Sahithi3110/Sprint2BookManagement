import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../classes/book';
import { Bookorder } from '../classes/bookorder';
import { Cart } from '../classes/cart';
import { Payment } from '../classes/payment';
import { Register } from '../classes/register';

@Injectable({
  providedIn: 'root'
})
export class BookService {
   private baseUrl:string ="http://localhost:8085/BookManagement/getall";
  
  constructor(private httpClient:HttpClient) { }
  
  public getBookList():Observable<Book[]>{
     return this.httpClient.get<Book[]>(`${this.baseUrl}`);
  }

  public doRegistration(register: any){
    return this.httpClient.post("http://localhost:8085/BookManagement/addRegisterer",
                                   register,{responseType:'text' as 'json'});
  }
 
  private loginURL:string ="http://localhost:8085/BookManagement/login";
  public login():Observable<Register[]>{
    return this.httpClient.get<Register[]>(`${this.loginURL}`);
  }
  
  public showCart():Observable<Cart[]>{
    return this.httpClient.get<Cart[]>(`${"http://localhost:8085/BookManagement/showCart"}`);
  }
  public addToCart(cart: Book) {
    return this.httpClient.post("http://localhost:8085/BookManagement/addToCart",
    cart,{responseType:'text' as 'json'});
  }
  public deleteBookFromCart(title:string) {
    console.log(title);
    return  this.httpClient.delete("http://localhost:8085/BookManagement/deleteBookFromCart/"+title);
  }
  public increaseQuantity(title: any) {
    return  this.httpClient.put("http://localhost:8085/BookManagement/addQuantity/"+title,title
    ,{responseType:'text' as 'json'});
  }
  public bookOrderDetails(bookOrder: any) {
    return this.httpClient.post("http://localhost:8085/BookManagement/addBookOrder",bookOrder,{responseType:'text' as 'json'});
  }
   public decreaseQunatity(title:any){
    return  this.httpClient.put("http://localhost:8085/BookManagement/decreaseQuantity/"+title,title
    ,{responseType:'text' as 'json'});
   }
   public addPayment(payment: Payment) {
    return this.httpClient.post("http://localhost:8085/BookManagement/doPayment",
    payment,{responseType:'text' as 'json'});
  }
  public getOrderDetails(orderId:number):Observable<Bookorder[]> {
    return this.httpClient.get<Bookorder[]>(`${"http://localhost:8085/BookManagement/getOrder/"+orderId}`);
  }
  private totalItems: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  getCartItems() {
      return this.totalItems.asObservable();
  }

  updateCartItems(items: number) {
      this.totalItems.next(items);
  }
  
  
  
 
  
  
  

}

