import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartItemComponent } from "../cart/cart-item/cart-item.component";
import { OrderSummaryComponent } from "../cart/order-summary/order-summary.component";

@Component({
  selector: 'app-cart-checkout',
  imports: [CommonModule, FormsModule],
  template: `<div class="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-10 grid grid-cols-2 gap-6">

  <div class="w-full">
    <h2 class="text-2xl font-bold mb-4">Checkout</h2>

    <div class="border-b pb-4 mb-6">
      <h3 class="font-semibold text-lg mb-2">Contact</h3>
      <div class="flex flex-col gap-4">
        <input type="text" placeholder="Full Name" class="w-full border rounded-md p-2" [(ngModel)]="formData.fullName">
        <input type="email" placeholder="Email Address" class="w-full border rounded-md p-2" [(ngModel)]="formData.email">
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
        <input type="text" placeholder="Address" class="w-full border rounded-md p-2" [(ngModel)]="formData.address">
        <div class="grid grid-cols-3 gap-4">
          <input type="text" placeholder="City" class="w-full border rounded-md p-2" [(ngModel)]="formData.city">
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
          <input type="text" placeholder="Postal Code" class="w-full border rounded-md p-2" [(ngModel)]="formData.postalCode">
        </div>
        <input type="text" placeholder="Phone" class="w-full border rounded-md p-2" [(ngModel)]="formData.phone">
      </div>
    </div>
  </div>

 
  <div class="w-full bg-gray-100 p-6 rounded-xl shadow-md max-h-[600px] overflow-y-auto">
    <h3 class="font-semibold text-lg mb-4">Order Summary</h3>

    <div *ngFor="let product of products" class="flex gap-4 items-center border-b pb-4">
      <img [src]="product.thumbnail" class="w-20 h-20 object-cover rounded-md">
      <div>
        <h4 class="text-lg font-semibold">{{ product.title }}</h4>
        <p class="text-gray-500">R{{ product.price }} x {{ product.quantity }}</p>
      </div>
    </div>

    <div class="mt-6">
      <h3 class="font-semibold text-lg mb-4">Payment</h3>
      <div class="flex flex-col gap-3">
        <label class="flex items-center gap-2">
          <input type="radio" name="payment" value="Credit Card" [(ngModel)]="formData.paymentMethod">
          <span class="text-sm text-gray-700">Credit Card</span>
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" name="payment" value="Cash on Delivery" [(ngModel)]="formData.paymentMethod">
          <span class="text-sm text-gray-700">Cash on Delivery</span>
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" name="payment" value="EFT" [(ngModel)]="formData.paymentMethod">
          <span class="text-sm text-gray-700">Electronic Funds Transfer (EFT)</span>
        </label>
      </div>
    </div>

    <div class="mt-4 border-t pt-4">
      <h3 class="font-semibold text-lg mb-2">Estimated Delivery: R{{ deliveryFee }}</h3>
      <h3 class="font-semibold text-lg mb-2">Total Price: R{{ totalPrice }}</h3>
    </div>

    <button class="bg-green-600 text-white w-full py-3 rounded-lg mt-6 hover:bg-green-700 transition-all" (click)="placeOrder()">
      Place Order
    </button>
  </div>

</div>

`,

})
export class CartCheckoutComponent {
  cartService = inject(CartService);
  router = inject(Router);
  products = this.cartService.cart();

  deliveryFee = 25;
  taxRate = 0.15;

  formData = {
    fullName: '',
    email: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    phone: '',
    paymentMethod: '',
    checkoutAsGuest: false,
  };

  get totalPrice(): number {
    const subtotal = this.cartService.cart().reduce((sum, item) => sum + item.price * item.quantity, 0);
    const taxes = subtotal * this.taxRate;
    return subtotal + taxes + this.deliveryFee;
  
  }

  isValidForm(): boolean {
    const { fullName, email, address, city, postalCode, phone, paymentMethod } = this.formData;

   
    if (!fullName.trim()) {
      alert('Full Name is required.');
      return false;
    }


    if (!email.includes('@') || !email.includes('.')) {
      alert('Enter a valid email address.');
      return false;
    }

   
    if (!address.trim()) {
      alert('Address is required.');
      return false;
    }

  
    if (!city.trim()) {
      alert('City is required.');
      return false;
    }


    if (!/^\d{4}$/.test(postalCode)) {
      alert('Postal Code must be a 4-digit number.');
      return false;
    }


    if (!/^\d{10}$/.test(phone)) {
      alert('Phone number must be exactly 10 digits.');
      return false;
    }

    if (!paymentMethod.trim()) {
      alert('Select a payment method.');
      return false;
    }

    return true;
  }

  placeOrder(): void {
    if (!this.isValidForm()) {
      return; 
    }


    const orderNumber = Math.floor(100000 + Math.random() * 900000);

   
    this.router.navigate(['/orders'], {
      state: {
        orderNumber,
        contactInfo: this.formData,
        products: this.cartService.cart(),
        totalAmount: this.totalPrice,
      },
    });
  }
}