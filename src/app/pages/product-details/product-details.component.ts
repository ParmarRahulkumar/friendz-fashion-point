import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../core/models/product.model';
import { PRODUCTS } from '../../core/data/products';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { PageMetaService } from '../../core/services/page-meta.service';

@Component({
  selector: 'app-product-details', standalone: true, imports: [CommonModule, RouterLink],
  template: `<section class="detail" *ngIf="product; else missing"><div class="breadcrumb"><a routerLink="/">HOME</a> / <a routerLink="/shop">SHOP</a> / {{ product.category | uppercase }}</div><div class="detail-grid"><div class="detail-image"><img [src]="product.image" [alt]="product.name + ' fashion illustration'"><span>THE FRIENDZ FASHION POINT</span></div><div class="detail-copy"><span class="eyebrow">{{ product.category }} <b *ngIf="product.isNew">· NEW ARRIVAL</b></span><h1>{{ product.name }}</h1><div class="price">{{ whatsapp.formatPrice(product.price) }}</div><p class="description">{{ product.description }}</p><div class="rule"></div><div class="option-label"><span>SELECT A SIZE</span><span>NEED A HAND? <a routerLink="/contact">ASK US</a></span></div><div class="sizes"><button *ngFor="let size of product.sizes" type="button" [class.selected]="selectedSize === size" (click)="selectedSize = size">{{ size }}</button></div><div class="option-label color-label">AVAILABLE COLOURS</div><div class="colors"><span *ngFor="let color of product.colors">{{ color }}</span></div><button class="enquire" type="button" (click)="whatsapp.enquire(product, selectedSize)">Enquire on WhatsApp <span>↗</span></button><a class="visit-store" routerLink="/contact">Prefer to see it in person? <u>Visit our store</u> ↗</a><div class="detail-notes"><div><span>01</span><p>Come by, try it on, find your fit.</p></div><div><span>02</span><p>Our team is happy to help with sizes.</p></div></div></div></div></section><ng-template #missing><section class="not-found"><span class="eyebrow">A LITTLE DETOUR</span><h1>We couldn't find that piece.</h1><a routerLink="/shop">Back to the home page</a></section></ng-template>`,
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  product: Product | undefined; selectedSize = '';
  constructor(route: ActivatedRoute, readonly whatsapp: WhatsAppService, meta: PageMetaService) { const id = Number(route.snapshot.paramMap.get('id')); this.product = PRODUCTS.find((item) => item.id === id); this.selectedSize = this.product?.sizes[0] ?? ''; meta.update(this.product ? `${this.product.name} | The Friendz Fashion Point` : 'Piece Not Found | The Friendz Fashion Point', this.product?.description ?? 'Explore the latest menswear at The Friendz Fashion Point in Khalal.'); }
}
