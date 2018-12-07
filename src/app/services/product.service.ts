import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private base = '/api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.base);
  }

  createProduct(product: Product): Observable<Product> {
    console.log('from service', Product);
    return this.http.post<Product>(this.base, product);
  }

  removeProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.base}/${id}`);
  }

  updateProduct(product: Product): Observable<Product> {
     return this.http.put<Product>(`${this.base}/${product._id}`, product);
  }

  getProduct(id: string): Observable<Product> {
     return this.http.get<Product>(`${this.base}/${id}`);
  }
}

