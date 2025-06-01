import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private dataUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  products = signal<any[]>([]);

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl);
  }

  setProduct(products: any[]) {
    this.products.set(products);
  }

  searchByTitle(title: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.dataUrl}?title=${title}`);
  }
}
