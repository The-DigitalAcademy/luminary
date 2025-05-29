import { Component, inject } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-10 grid grid-cols-2 gap-6">

  <div class="w-full">
    <h2 class="text-2xl font-bold mb-4">Checkout</h2>

    <div class="border-b pb-4 mb-6">
      <h3 class="font-semibold text-lg mb-2">Contact</h3>
      <div class="flex flex-col gap-4">
        <input type="text" placeholder="Full Name" class="w-full border rounded-md p-2">
        <input type="email" placeholder="Email Address" class="w-full border rounded-md p-2">
      </div>

      <div class="mt-4">
        <label class="flex items-center gap-2">
          <input type="checkbox">
          <span class="text-sm text-gray-700">Checkout as Guest</span>
        </label>
      </div>
    </div>
    <div class="border-b pb-4 mb-6">
      <h3 class="font-semibold text-lg mb-2">Shipping Address</h3>
      <div class="flex flex-col gap-4">
        <input type="text" placeholder="Address" class="w-full border rounded-md p-2">
        <div class="grid grid-cols-3 gap-4">
          <input type="text" placeholder="City" class="w-full border rounded-md p-2">
          <select class="w-full border rounded-md p-2">
            <option disabled selected>Province</option>
            <option>Eastern Cape</option>
            <option>Free State</option>
            <option>Gauteng</option>
            <option>KwaZulu-Natal</option>
            <option>Limpopo</option>
            <option>Mpumalanga</option>
            <option>North West</option>
            <option>Northern Cape</option>
            <option>Western Cape</option>
          </select>
          <input type="text" placeholder="Postal Code" class="w-full border rounded-md p-2">
        </div>
        <input type="text" placeholder="Phone" class="w-full border rounded-md p-2">
      </div>
    </div>
  </div>

  `,
})
export class CheckoutComponent {
  checkoutService = inject(CheckoutService);
  product = this.checkoutService.selectedProduct();
}
