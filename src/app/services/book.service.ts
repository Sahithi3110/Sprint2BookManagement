import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../classes/book';
import { Cart } from '../classes/cart';
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
}

