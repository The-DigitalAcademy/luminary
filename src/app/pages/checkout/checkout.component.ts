import { Component, inject } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h2 class="text-2xl font-bold mb-4">Checkout</h2>
      <p class="text-gray-600">Finalize your order here!</p>
      <div *ngIf="product">
        <div class="bg-white shadow-md border rounded-xl p-6 flex gap-4 items-center">
          <img [src]="product.thumbnail" class="w-[100px] h-[100px] object-contain" />
          <div>
            <h3 class="font-semibold">{{ product.title }}</h3>
            <p class="text-gray-500">$ {{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class CheckoutComponent {
  checkoutService = inject(CheckoutService);
  product = this.checkoutService.selectedProduct();
}
