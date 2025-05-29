import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { ButtonComponent } from "../button/button.component";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimaryButtonComponent, RouterLink, ButtonComponent],
  template: `
    <div class="bg-slate-50 shadow-lg border-b border-gray-200 flex justify-between sticky top-0 z-50 px-[6rem] py-[.5rem] mx-[3rem] rounded-b-md">
      <button class="text-2xl font-bold tracking-wide text-gray-800 hover:text-slate-300 mx-[2rem]" routerLink="/">Luminary</button>
      <div class="flex-grow flex justify-center items-center mx-[20rem]">
        <input type="text" placeholder="Search products..." class="w-1/1 px-2 py-.5 border border-gray-300 rounded-md focus:outline-none mx-[.5rem]" />
        <button class="bg-slate-100 text-black px-2 py-.5 rounded-md hover:bg-slate-300 transition-all flex items-center gap-2">
          <i class="bi bi-search"></i>
        </button>
      </div>
      <div class="flex items-center gap-4">
        <button routerLink="/wishlist" class="bg-transparent border border-gray-300 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-100 transition-all flex items-center gap-2">
          <i class="bi bi-heart"></i>
        </button>

      <app-primary-button  label="{{ cartLabel() }}" routerLink="/cart" />
      <app-button class="bg-slate-100 text-white font-bold text-lg" label="Login" routerLink="/login"/>
      <app-button class="bg-slate-100 text-white font-bold text-lg" label="Register" routerLink="/register"/>
      </div>

    </div>

  `,
  styles: `
  `,
})
export class HeaderComponent {
  cartService = inject(CartService);

  cartLabel = computed(() => `${this.cartService.cart().length}`);
}
