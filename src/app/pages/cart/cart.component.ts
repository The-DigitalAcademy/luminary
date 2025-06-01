import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSummaryComponent],
  template: `
    <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-10 grid grid-cols-2 gap-6">

      <div class="w-full max-h-[600px] overflow-y-auto pr-2">
       <h2 class="text-2xl font-bold mb-4">Shopping Cart</h2>
    
        @for (item of cartService.cart(); track item.id) {
          <app-cart-item [item]="item" />
        }
      </div>
    
    <div class="w-full bg-gray-100 p-6 rounded-xl shadow-md sticky top-10">
      <app-order-summary />
    </div>

  </div>
  `,
  styles: ``,
})
export class CartComponent {
  cartService = inject(CartService);
}