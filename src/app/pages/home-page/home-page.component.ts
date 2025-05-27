import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { CategoryComponent } from '../../main/category/category.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductsCardComponent } from '../../main/products-card/products-card.component';
import { FooterComponent } from '../../main/footer/footer.component';
import { SearchComponent } from '../../main/search/search.component';

@Component({
  selector: 'app-home-page',
  imports: [HeaderComponent, CategoryComponent, ProductsCardComponent, FooterComponent, SearchComponent],
  templateUrl: './home-page.component.html',
  styles: ``
})
export class HomePageComponent {

}
