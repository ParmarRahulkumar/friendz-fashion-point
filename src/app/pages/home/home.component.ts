import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRODUCTS } from '../../core/data/products';
import { PageMetaService } from '../../core/services/page-meta.service';

@Component({
  selector: 'app-home', standalone: true, imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly arrivals = PRODUCTS.slice(0, 4);
  constructor(meta: PageMetaService) { meta.update("The Friendz Fashion Point | Men's Fashion", "The Friendz Fashion Point - Men's fashion store offering stylish and quality clothing."); }
  readonly collections = [
    { name: 'Shirts', image: 'assets/products/shirt.svg' }, { name: 'T-Shirts', image: 'assets/products/polo.svg' }, { name: 'Jeans', image: 'assets/products/jeans.svg' },
    { name: 'Trousers', image: 'assets/products/trousers.svg' }, { name: 'Casual Wear', image: 'assets/products/printed.svg' }, { name: 'Formal Wear', image: 'assets/products/formal.svg' }
  ];
}
