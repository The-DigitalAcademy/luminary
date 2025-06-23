import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { Product } from '../../models/product.model';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CategoryComponent } from '../../components/category/category.component';

@Component({
  selector: 'app-products-list',
  imports: [
    ProductCardComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
  ],
  template: `
    <div>
      <app-header />

      <app-category (categorySelected)="filterProductsByCategory($event)" />

      <div class=" mt-10 bg-slate-50 p-8 grid grid-cols-3 gap-4">
        @for (product of products; track product.id) {
        <app-product-card [product]="product" />
        }
      </div>
      <app-footer />
    </div>
  `,
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  private allProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        console.log('Fetched products:', data);
        this.allProducts = data;
        this.products = data;
      },
      (error) => console.error('Error fetching products:', error)
    );
  }

  filterProductsByCategory(category: string): void {
    console.log('Received category:', category);
    console.log('All products count:', this.products.length);

    const lowerCategory = category.toLowerCase();

    if (lowerCategory === 'all') {
      this.products = [...this.allProducts];
      return;
    }

    this.products = this.allProducts.filter(
      (product) =>
        product.category?.toLowerCase() === lowerCategory ||
        product.tags?.some((tag) => tag.toLowerCase() === lowerCategory)
    );
    console.log(
      `Filtered ${this.products.length} products by category: ${category}`
    );
  }
}
