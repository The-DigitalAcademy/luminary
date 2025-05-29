  import { Component, inject } from '@angular/core';
  import { Router, RouterLink } from '@angular/router';
  import { Product } from '../../models/product.model';
  import { CartService } from '../../services/cart.service';
  import { WishlistService } from '../../services/wishlist.service';
  import { ProductService } from '../../services/product.service';
  import { HeaderComponent } from "../../components/header/header.component";
  import { ProductsListComponent } from "../products-list/products-list.component";

  @Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [HeaderComponent, ProductsListComponent],
    template: `
      <div class="bg-slate-100 h-dvh w-screen">
        <app-header></app-header>
        <div class= "bg-slate-50 mx-[3rem]">
          <app-products-list/>
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
