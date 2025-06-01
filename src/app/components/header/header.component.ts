import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router, RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { ButtonComponent } from '../button/button.component';
import { UserService } from '../../services/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ PrimaryButtonComponent,  RouterLink, ButtonComponent, NgIf ],
  template: `
    <div 
      class="fixed top-0 left-0 w-full h-16 bg-white/80 backdrop-blur-md shadow-md border-b border-gray-300 flex justify-evenly items-center px-6 py-4 z-50"
    >
      <div class="flex items-center">
        <button
          routerLink="/"
          class="text-2xl italic font-bold tracking-wide text-gray-800 hover:text-gray-500 transition-colors duration-200 ease-in-out"
        >
          Luminary
        </button>
      </div>

      <div class="flex items-center gap-2 flex-grow justify-center">
        <input
          type="text"
          placeholder="Search products..."
          class="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 outline-none"
        />
        <button
          class="bg-transparent text-gray-700 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 ease-in-out flex items-center gap-2 cursor-pointer"
        >
          <i class="bi bi-search"></i>
        </button>
      </div>

      <div class="flex items-center gap-4">
        <button
          routerLink="/wishlist"
          class="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md transition-colors duration-200 ease-in-out flex items-center gap-2 cursor-pointer">
          <i class="bi bi-heart"></i>
        </button>
        
        <app-primary-button
  class="bg-transparent text-gray-700 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 ease-in-out flex items-center gap-2"
  label="{{ cartLabel() }}"
  routerLink="/cart"
/>


        <ng-container *ngIf="userService.currentUser(); else guestOptions">
          <app-button
            class="bg-gray-300 font-bold px-3 py-2 rounded-lg"
            label="Logout"
            (onClick)="navigateToHome()"
          />
          <span class="self-center">Welcome, {{ userService.currentUser()?.firstName }}</span>
        </ng-container>

        <ng-template #guestOptions>
          <app-button
            class="bg-transparent text-gray-700 font-bold px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 ease-in-out cursor-pointer"
            label="Login"
            (onClick)="navigateToLogin()"
          />
          <app-button
            class="bg-transparent text-gray-700 font-bold px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 ease-in-out cursor-pointer"
            label="Register"
            (onClick)="navigateToRegister()"
          />
        </ng-template>
      </div>
    </div>
  `,
  styles: `
  `,
})
export class HeaderComponent {
  cartService = inject(CartService);
  router = inject(Router);
  public userService = inject(UserService);

  cartLabel = computed(() => `${this.cartService.cart().length}`);

   navigateToLogin() {
    this.router.navigate(['/login']);
  }
    navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToHome(){
    this.userService.logout();
  }

}
