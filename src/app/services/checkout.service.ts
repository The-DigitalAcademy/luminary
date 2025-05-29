import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  selectedProduct = signal<Product | null>(null);

  setProduct(product: Product) {
    this.selectedProduct.set(product);
  }
}
