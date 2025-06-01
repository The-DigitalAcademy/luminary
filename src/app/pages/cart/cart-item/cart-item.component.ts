import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ButtonComponent } from '../../../components/button/button.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
    <div class="bg-white shadow-md border rounded-xl p-6 flex gap-4 items-center">
      <img [src]="item().thumbnail" class="w-[50px] h-[50px] object-contain" />
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ item().title }}</span>
        <span class="text-sm"> {{ 'R' + item().price }}</span>
      </div>
      <div class="flex items-center gap-2">
        <app-button label="-" (btnClicked)="cartService.decrementQuantity(item())"></app-button>
        <span class="text-lg">{{ item().quantity }}</span>
        <app-button label="+" (btnClicked)="cartService.incrementQuantity(item())"></app-button>
      </div>
      <div class="flex-1"></div>
      <button (click)="cartService.removeFromCart(item())" class="text-red-200 text-xl hover:text-red-500 transition-all cursor-pointer">
        <i class="bi bi-x-circle"></i>
      </button>

    </div>
  `,
  styles: ``,
})
export class CartItemComponent {
  item = input.required<Product>();
  cartService = inject(CartService);
}