import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router} from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { WishlistService } from '../../services/wishlist.service';
import { CheckoutService } from '../../services/checkout.service';
import { CartService } from '../../services/cart.service';
import { NotificationBannerComponent } from '../../components/notification/notification-banner.component';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, NotificationBannerComponent, RouterModule],
  template: `
   <app-notification-banner #banner></app-notification-banner>

    <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg ">
  <!-- Image Section -->
  <div class="flex flex-col md:flex-row gap-6">
    <div class="flex flex-col items-center">
      <img [src]="product.thumbnail" [alt]="product.title" class="w-64 h-auto bg-white rounded-lg shadow-md" />
    
      <div class="flex gap-2 mt-2">
        <img *ngFor="let img of product.images" [src]="img" class="w-16 h-16 bg-white rounded-lg shadow-md cursor-pointer hover:opacity-80"/>
      </div>
    </div>

    <!-- Details Section -->
    <div class="flex-1">
      <h2 class="text-2xl font-bold text-gray-900">{{ product.title }}</h2>
      <p class="text-gray-600">{{ product.description }}</p>

      <div class="mt-4 text-lg font-semibold text-blue-600">
        Price: R{{ product.price }}
      </div>

      <div class="mt-2">
        <span class="text-gray-500">Category: </span> <span class="font-medium">{{ product.category }}</span>
      </div>
      <div class="mt-2">
        <span class="text-gray-500">Discount: </span> <span class="font-medium">{{ product.discountPercentage }}%</span>
      </div>
      <div class="mt-2">
        <span class="text-gray-500">Rated: </span> <span class="font-medium">{{ product.rating }} Stars</span>
      </div>
      <div class="mt-2">
        <span class="text-gray-500">Return Policy: </span> <span class="font-medium">{{ product.returnPolicy }}</span>
      </div>
      <div class="mt-2">
        <span class="text-gray-500">Warranty: </span> <span class="font-medium">{{ product.warrantyInformation }}</span>
      </div>
  

      <!-- Buttons -->
      <div class="flex gap-4 mt-6">
        <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-all cursor-pointer"
                (click)="addToCart()">
          <i class="bi bi-bag-fill"></i> Add to Cart
        </button>
        <button (click)="buyNow()" class="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-200 hover:text-gray-600 transition-all cursor-pointer">
        <i class="bi bi-cart2"></i> Buy Now
        </button>
        <button class="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-200 hover:text-red-500 transition-all cursor-pointer"
                (click)="toggleWishlist()">
          <i [class]="isInWishlist() ? 'bi bi-heart-fill' : 'bi bi-heart'"></i>
        </button>
      </div>

      <!-- Reviews Section -->
      <div class="mt-6 border-t pt-4">
        <h3 class="text-xl font-semibold">Reviews</h3>
        <div *ngFor="let review of product?.reviews" class="mt-3 border-b pb-2">
          <p class="text-gray-700"><strong>{{ review.reviewerName }}</strong> ({{ review.rating }} Stars)</p>
          <p class="text-gray-600 italic">{{ review.comment }}</p>
        </div>
      </div>
    </div>
  </div>
</div>

  `,
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;

   @ViewChild(NotificationBannerComponent) banner!: NotificationBannerComponent;



  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService, private wishlistService: WishlistService, private cartService: CartService,  private checkoutService: CheckoutService) {}

  ngOnInit(): void {

    const productId = Number(this.route.snapshot.paramMap.get('id'));
    
    this.productService.getProducts().subscribe(products => {
      this.product = products.find(p => Number(p.id) === productId) || {} as Product;
      console.log('Matched Product:', this.product);
    });
  }
  addToCart(): void {
    if (this.cartService.isProductInCart(this.product)){
    this.banner?.showBanner('Item already in cart!', true);
    return;
    }
    this.banner?.showBanner(`You added ${this.product.title} added to your shopping cart!`, false);
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
