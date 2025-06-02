import { Component, inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-orders',
    standalone: true,
    template: `
    <div class="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-10">
  <h2 class="text-2xl font-bold text-center">Order Confirmation</h2>

  <p class="text-lg mt-4 text-center">Your order #{{ orderData.orderNumber }} has been placed!</p>

  
  <div class="border-b pb-4 mb-4">
    <h3 class="font-semibold text-lg mb-2">Contact Info</h3>
    <p><strong>Name:</strong> {{ orderData.contactInfo.fullName }}</p>
    <p><strong>Email:</strong> {{ orderData.contactInfo.email }}</p>
    <p><strong>Phone:</strong> {{ orderData.contactInfo.phone }}</p>
  </div>


  <div class="border-b pb-4 mb-4">
    <h3 class="font-semibold text-lg mb-2">Shipping Address</h3>
    <p>{{ orderData.contactInfo.address }}, {{ orderData.contactInfo.city }}</p>
    <p>{{ orderData.contactInfo.province }} - {{ orderData.contactInfo.postalCode }}</p>
  </div>


  <div class="border-b pb-4 mb-4">
    <h3 class="font-semibold text-lg mb-2">Payment Method</h3>
    <p>{{ orderData.contactInfo.paymentMethod }}</p>
  </div>


  <div class="border-b pb-4 mb-4">
    <h3 class="font-semibold text-lg mb-2">Products Ordered</h3>
    <p>{{ formattedProducts }}</p>
  </div>


  <h3 class="font-semibold text-lg text-center">Total Amount: R{{ orderData.totalAmount }}</h3>

  <button class="bg-red-500 text-white w-full py-3 rounded-lg mt-6 hover:bg-red-700 transition-all"
        (click)="cancelOrder()">
  Cancel Order
</button>
</div>
`,
  })
  export class OrdersComponent {

    router = inject(Router);

    orderData = history.state as {
        products: Product[];
        orderNumber: number;
        contactInfo: { fullName: string; email: string; phone: string; address: string; city: string; province: string; postalCode: string; paymentMethod: string };
        totalAmount: number;
      };

    get formattedProducts(): string {
      return this.orderData.products.map(p => `${p.title} x ${p.quantity}`).join(', ');
    }
    cancelOrder(): void {
        const confirmCancel = confirm('Are you sure you want to cancel this order?');
        if (confirmCancel) {
          this.router.navigate(['/cartcheckout']); 
        }
      }
  }