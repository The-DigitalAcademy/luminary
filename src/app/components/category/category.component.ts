import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [CommonModule],
  standalone: true,
  template: `<div
    class="bg-gray-50 w-full px-6  mt-20 border-b border-gray-300 z-40"
  >
    <div
      class="flex grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-center"
    >
      <div
        *ngFor="let category of categories"
        (click)="onCategorySelect(category.name.toLowerCase())"
        [ngClass]="{
          'border-blue-500 text-blue-700':
            selectedCategory === category.name.toLowerCase(),
          'hover:bg-gray-100': selectedCategory !== category.name.toLowerCase()
        }"
        class="group relative flex flex-col items-center gap-2 px-4 py-3 rounded-md hover:bg-gray-100 transition-all duration-200 ease-in-out cursor-pointer"
      >
        <i
          [class]="category.icon + ' text-2xl'"
          [ngClass]="{
            'text-blue-700': selectedCategory === category.name.toLowerCase(),
            'text-gray-700': selectedCategory !== category.name.toLowerCase()
          }"
        ></i>
        <p
          class="font-medium"
          [ngClass]="{
            'text-blue-700': selectedCategory === category.name.toLowerCase(),
            'text-gray-700': selectedCategory !== category.name.toLowerCase()
          }"
        >
          {{ category.name }}
        </p>

        <div
          class="absolute top-full left-0 w-48 z-100 bg-white shadow-md rounded-md hidden group-hover:block transition-all duration-300"
        >
          <ul class="p-2">
            <li
              *ngFor="let sub of category.subcategories"
              class="px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              {{ sub }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div> `,
})
export class CategoryComponent {
  @Output() categorySelected = new EventEmitter<string>();

  selectedCategory: string = 'all';

  onCategorySelect(category: string) {
    this.selectedCategory = category;
    console.log('Category clicked:', category);
    this.categorySelected.emit(category);
  }

  categories = [
    {
      name: 'All',
      icon: 'bi bi-list',
      subcategories: [],
    },
    {
      name: 'Laptops',
      icon: 'bi bi-laptop',
      subcategories: ['Mac', 'Matebook', 'Gaming Laptop'],
    },
    {
      name: 'Smartphones',
      icon: 'bi bi-phone',
      subcategories: ['iPhone', 'Galaxy', 'Nova', 'Pixel'],
    },
    {
      name: 'iPhone',
      icon: 'bi bi-apple',
      subcategories: ['iPhone 16', 'iPhone X', 'iPhone SE'],
    },
    {
      name: 'Galaxy',
      icon: 'bi bi-google-play',
      subcategories: ['Galaxy S25 Ultra', 'Galaxy S24', 'Wearables'],
    },
    {
      name: 'Watch',
      icon: 'bi bi-smartwatch',
      subcategories: ['Apple Watch', 'Polaroid', 'Garmin'],
    },
    {
      name: 'Accessories',
      icon: 'bi bi-earbuds',
      subcategories: [
        'Covers & Screen Protectors',
        'Cables & Chargers',
        'Bags & Sleeves',
        'Mounts & Stands',
      ],
    },
    {
      name: 'Services',
      icon: 'bi bi-globe2',
      subcategories: ['Trade In', 'Tech Support', 'Insurance'],
    },
  ];
}
