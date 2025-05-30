import { Component, OnInit, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  template: `
    <div *ngIf="product" class="product-details">
      <h2>{{ product.title }}</h2>
      <img [src]="product.thumbnail" alt="{{ product.title }}" />
      <p>{{ product.description }}</p>
      <p><strong>Price:</strong> {{ product.price }}</p>
    </div>
  `,
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProducts().subscribe(products => {
      this.product = products.find(p => p.id === productId)!;
    });
  }
}
