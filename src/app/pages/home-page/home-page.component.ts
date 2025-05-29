  import { Component, inject } from '@angular/core';
  import { Router, RouterLink } from '@angular/router';
  import { Product } from '../../models/product.model';
  import { CartService } from '../../services/cart.service';
  import { WishlistService } from '../../services/wishlist.service';
  import { ProductService } from '../../services/product.service';
  import { HeaderComponent } from "../../components/header/header.component";
import { ProductCardComponent } from "../products-list/product-card/product-card.component";
import { ProductsListComponent } from "../products-list/products-list.component";

  @Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [HeaderComponent, ProductCardComponent, ProductsListComponent],
    template: `
      <div class=" h-dvh w-screen bg-gray-500">
        <app-header></app-header>
        <div class="mx-[3rem]">
          <app-products-list/>
          <app-product-card/>
        </div>
      </div>

    `,
    styles: ``,
  })
  export class HomePageComponent {
    router = inject(Router);
    cartService = inject(CartService);
    wishlistService = inject(WishlistService);
    productService = inject(ProductService);
  }
