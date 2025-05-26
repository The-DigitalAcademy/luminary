import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryComponent } from './main/category/category.component';
import { ProductsCardComponent } from './main/products-card/products-card.component';
import { FooterComponent } from './main/footer/footer.component';
import { SearchComponent } from './main/search/search.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CategoryComponent,ProductsCardComponent, FooterComponent,SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'luminary-app';
}
