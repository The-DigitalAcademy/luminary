import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { ButtonComponent } from '../../../components/button/button.component';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';

@Component({
  selector: 'app-order-summary',
  template: `
    <div class="bg-slate-100 p-6 rounded-xl shadow-xl border flex flex-col items-center text-center">
  <h2 class="text-2xl font-bold">Order Summary</h2>

  <div class="flex flex-col gap-4 mt-4">
    <div class="flex flex-col items-center">
      <span class="text-lg">Subtotal</span>
      <span class="text-lg font-bold">R{{ subtotal() }}</span>
    </div>

    <div class="flex flex-col items-center">
      <span class="text-lg">Estimated Delivery & Handling</span>
      <span class="text-lg font-bold">R{{ DELIVERY_HANDLING_FEE }}</span>
    </div>

    <div class="flex flex-col items-center">
      <span class="text-lg">Total</span>
      <span class="text-lg font-bold">R{{ total() }}</span>
    </div>
  </div>

  <button class="bg-green-600 text-white px-6 py-3 rounded-lg mt-6 hover:bg-green-700 transition-all">
    Proceed to Checkout
  </button>
</div>

  `,
  styles: ``,
})
export class OrderSummaryComponent {
  cartService = inject(CartService);

  readonly DELIVERY_HANDLING_FEE = 25;

  subtotal = computed(() => {
    return this.cartService.cart().reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  });

  total = computed(() => {
    const subtotalValue = parseFloat(this.subtotal());
    return subtotalValue > 0 ? (subtotalValue + this.DELIVERY_HANDLING_FEE).toFixed(2) : '0.00';
  });

  proceedToCheckout(): void {
    console.log('Proceed to checkout button clicked'); // Debugging
    
  }
}