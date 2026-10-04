import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class WhatsAppService {
  private readonly WHATSAPP_NUMBER = '917984808868';

  enquire(product?: Product, size?: string): void {
    const lines = ['Hello The Friendz Fashion Point,'];
    if (product) {
      lines.push('I am interested in:', `Product: ${product.name}`, `Price: ${this.formatPrice(product.price)}`);
      if (size) lines.push(`Size: ${size}`);
      lines.push('', 'Please share more details.');
    } else {
      lines.push('I would like to know more about your collection.');
    }
    const number = this.WHATSAPP_NUMBER.replace(/\D/g, '');
    const url = `https://wa.me/${number}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  }
}
