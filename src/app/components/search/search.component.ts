import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  template: `
    <div class="flex justify-center items-center">
      <input
        type="text"
        placeholder="Search products..."
        #title
        class="w-1/1 px-2 py-.5 border border-gray-300 rounded-md focus:outline-none"
      />
      <button
        (click)="onSearch(title.value)"
        class="bg-slate-100 text-black px-2 py-.5 rounded-md hover:bg-slate-300 transition-all flex items-center gap-2"
      >
        <i class="bi bi-search"></i>
      </button>
    </div>
  `,
  styles: `
  `,
})
export class SearchComponent {
  productService = inject(ProductService);

  onSearch(title: string) {
    this.productService.searchByTitle(title).subscribe((data) => {
      const product: any[] = Object.entries(data);
      this.productService.setProducts(product);
      console.log(product);
    });
    //  console.log(product);
  }
}
