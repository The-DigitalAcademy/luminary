import { Component, Input, ViewChild} from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Product } from '../../../models/product.model';
import { CartService } from '../../../services/cart.service';
import { WishlistService } from '../../../services/wishlist.service';
import { CheckoutService } from '../../../services/checkout.service';
import { NotificationBannerComponent } from '../../../components/notification/notification-banner.component';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [ CommonModule, NotificationBannerComponent, RouterModule],
  template: `
  <app-notification-banner #banner></app-notification-banner>


      <div class="product-card bg-white shadow-md rounded-lg p-4 flex flex-col items-center relative " >
      <img *ngIf="product?.thumbnail" [src]="product.thumbnail" alt="{{ product.title }}" class="w-48 h-48 object-cover rounded-md cursor-pointer"(click)="viewProductDetails($event)"  />

      <!-- Wishlist Button -->
      <button class="absolute top-2 right-2 cursor-pointer" (click)="toggleWishlist()">
              <i [class]="isInWishlist() ? 'bi bi-heart-fill text-red-500' : 'bi bi-heart'"></i>
      </button>

      <h3 class="text-lg font-bold mt-2 cursor-pointer" (click)="viewProductDetails($event)">{{ product.title }}</h3>

      <!-- Rating -->
      <div class="flex items-center text-yellow-500 mt-1">
        <i class="bi bi-star-fill"></i>
        <span class="ml-1 text-sm">{{ product.rating }}</span>
      </div>

      <p class="text-sm text-gray-600 mt-2">{{ product.brand }}</p>
      <p class="text-lg font-semibold text-gray-900 mt-2">R{{ product.price}}</p>
      <div class="flex gap-2 mt-4">
        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all active:scale-90 cursor-pointer" (click)="addToCart()">
          <i class="bi bi-bag-fill"></i> Add to Cart
        </button>
        <button (click)="buyNow()" class="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-600 transition-all cursor-pointer">
        <i class="bi bi-cart2"></i> Buy Now
        </button>
      </div>
  </div>

  `,
  styles: ``,
})
export class ProductCardComponent {
  @Input() product!: Product;

  @ViewChild(NotificationBannerComponent) banner!: NotificationBannerComponent;


  constructor(private router: Router, private cartService: CartService, private wishlistService: WishlistService, private checkoutService: CheckoutService) {}


  viewProductDetails(event: Event): void {
    event.stopPropagation();
    this.router.navigate(['/product', this.product.id]);
  }
  
  addToCart(): void {
    if (this.cartService.isProductInCart(this.product)) {
      console.log('Product already in cart!');
      this.banner.showBanner('Item already in cart!', true);
      return;
    } 
    this.banner.showBanner(`You added ${this.product.title} added to your shopping cart!`, false);
    setTimeout(() => this.cartService.addProduct(this.product), 0);
    
  }

  toggleWishlist(): void {
    this.wishlistService.toggleWishlist(this.product);
  }

  isInWishlist(): boolean {
    return this.wishlistService.isInWishlist(this.product);
  }

  buyNow(): void {
  this.checkoutService.setProduct(this.product); 
  this.router.navigate(['/checkout']);
  }
}