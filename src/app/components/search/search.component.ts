import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [  FormsModule, CommonModule],
  template: `
    <div class="flex justify-center items-center">
      <input
        type="text"
        placeholder="Search products..."
        [(ngModel)]="searchTeam"
        class="w-1/1 px-2 py-.5 border border-gray-300 rounded-md focus:outline-none"
      />
      <button
        (click)="onSearch()"
        class="bg-slate-100 text-black px-2 py-.5 rounded-md hover:bg-slate-300 transition-all flex items-center gap-2"
      >
        <i class="bi bi-search"></i>
      </button>
    </div>
        <div *ngIf="searchProduct.length > 0">
      <div *ngFor="let product of searchProduct" class="flex justify-between items-center">
        {{product.title}} - {{product.price | currency}}
      </div>
    </div>

    <div *ngIf="searchProduct.length === 0">
      No products found for "{{searchTeam}}"
    </div>
  `,
  styles: `
  `,
})
export class SearchComponent {
  searchTeam = '';
  searchProduct: any[] = [];

  productService = inject(ProductService);

  onSearch() {
     if(!this.searchTeam.trim()){return}
    this.productService.searchByTitle(this.searchTeam).subscribe({
      next: (results: Product[]) => {
      this.searchProduct = results;
      console.log(results);
    },
    });
  }
}
