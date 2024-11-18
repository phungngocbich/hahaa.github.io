import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iProduct } from './Interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: any
  url: string ="./assets/data/product.json";

  constructor(private _http: HttpClient) { }

  getProductList(){
    // return[
    //   {code:1, name:"Tiger", price: 18000},
    //   {code:2, name:"Heniken", price: 19000},
    //   {code:3, name:"3333", price: 17000},
    //   {code:4, name:"Blanc 1664", price: 21000},
    // ]
  }

  getAllProducts ():Observable<iProduct[]>{ 
    return this._http.get<iProduct[]>(this.url);

}

}
