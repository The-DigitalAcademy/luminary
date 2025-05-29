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
  <div class="w-full bg-gray-100 p-6 rounded-xl shadow-md">
    <h3 class="font-semibold text-lg mb-4">Order Summary</h3>
    <div class="flex gap-4 items-center">
      <img *ngIf="product" [src]="product.thumbnail" class="w-20 h-20 object-cover rounded-md">
      <div>
        <h4 class="text-lg font-semibold">{{ product?.title }}</h4>
        <p class="text-gray-500">$ {{ product?.price }}</p>
      </div>
    </div>

    <div class="mt-6">
      <h3 class="font-semibold text-lg mb-4">Payment</h3>
      <div class="flex flex-col gap-3">
        <label class="flex items-center gap-2">
          <input type="radio" name="payment" value="credit-card">
          <span class="text-sm text-gray-700">Credit Card</span>
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" name="payment" value="paypal">
          <span class="text-sm text-gray-700">Cash on Delivery</span>
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" name="payment" value="eft">
          <span class="text-sm text-gray-700">Electronic Funds Transfer (EFT)</span>
        </label>
      </div>
    </div>

    <div class="mt-4 border-t pt-4">
      <h3 class="font-semibold text-lg mb-2">Estimated Delivery: $ {{ deliveryFee }}</h3>
      <h3 class="font-semibold text-lg mb-2">Total Price: $ {{ totalPrice }}</h3>
    </div>

  
    <button class="bg-green-600 text-white w-full py-3 rounded-lg mt-6 hover:bg-green-700 transition-all">
      Place Order
    </button>
  </div>
</div>

  `,
})
export class CheckoutComponent {
  checkoutService = inject(CheckoutService);
  product = this.checkoutService.selectedProduct();
  
  deliveryFee = 25;

  get totalPrice(): number {
    return (this.product?.price || 0) + this.deliveryFee;
}}
