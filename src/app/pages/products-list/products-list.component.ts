import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { Product } from '../../models/product.model';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent, HeaderComponent, FooterComponent],
  template: `
  <div>
    <app-header/>
    <div class=" mt-16 bg-slate-50 p-8 grid grid-cols-3 gap-4">
      @for (product of products; track product.id) {
      <app-product-card [product]="product" />
      }
    </div>
    <app-footer/>
  </div>


  `,

})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        console.log('Fetched products:', data);
        this.products = data;
      },
      (error) => console.error('Error fetching products:', error)
    );
  }
}
