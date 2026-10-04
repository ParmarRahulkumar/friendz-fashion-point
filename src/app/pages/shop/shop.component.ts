import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../core/models/product.model';
import { PRODUCTS } from '../../core/data/products';
import { PageMetaService } from '../../core/services/page-meta.service';

@Component({
  selector: 'app-shop', standalone: true, imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  readonly categories = ['All', 'Shirts', 'T-Shirts', 'Jeans', 'Trousers', 'Casual Wear', 'Formal Wear'];
  activeCategory = 'All'; search = ''; sort = 'featured';
  constructor(route: ActivatedRoute, meta: PageMetaService) { meta.update('Shop the Collection | The Friendz Fashion Point', 'Explore shirts, T-shirts, jeans, trousers and everyday menswear at The Friendz Fashion Point in Khalal.'); const category = route.snapshot.queryParamMap.get('category'); if (category && this.categories.includes(category)) this.activeCategory = category; }
  get filteredProducts(): Product[] {
    const query = this.search.trim().toLowerCase();
    const products = PRODUCTS.filter((product) => (this.activeCategory === 'All' || product.category === this.activeCategory) && `${product.name} ${product.category}`.toLowerCase().includes(query));
    return [...products].sort((a, b) => this.sort === 'low' ? a.price - b.price : this.sort === 'high' ? b.price - a.price : this.sort === 'name' ? a.name.localeCompare(b.name) : a.id - b.id);
  }
  clearFilters(): void { this.activeCategory = 'All'; this.search = ''; }
}
