import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { WhatsAppService } from '../../../core/services/whatsapp.service';

@Component({
  selector: 'app-navbar', standalone: true, imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="announcement"><span>THOUGHTFULLY CHOSEN. MADE FOR EVERY DAY.</span><span>THE FRIENDZ FASHION POINT · KHALAL</span></div>
    <header class="site-header" [class.scrolled]="scrolled">
      <div class="nav-shell">
        <a class="brand" routerLink="/" aria-label="The Friendz Fashion Point home"><img src="assets/the-friendz-fashion-point-logo.png" alt="The Friendz Fashion Point logo"></a>
        <nav class="desktop-nav" aria-label="Main navigation"><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a><a routerLink="/about" routerLinkActive="active">Our Story</a><a routerLink="/contact" routerLinkActive="active">Visit Us</a></nav>
        <div class="nav-actions"><a class="instagram-link" href="https://www.instagram.com/the_friendz_fashion_point/reels/?__pwa=1#" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">Instagram</a><button class="nav-enquire" type="button" (click)="whatsapp.enquire()">WhatsApp</button></div>
        <button class="menu-toggle" type="button" (click)="menuOpen = !menuOpen" [attr.aria-expanded]="menuOpen" aria-label="Toggle navigation menu"><span></span><span></span></button>
      </div>
      @if (menuOpen) {
        <nav class="mobile-nav" aria-label="Mobile navigation"><a routerLink="/" (click)="closeMenu()">Home <span>01</span></a><a routerLink="/about" (click)="closeMenu()">Our story <span>02</span></a><a routerLink="/contact" (click)="closeMenu()">Visit us <span>03</span></a><button type="button" (click)="whatsapp.enquire()">WhatsApp</button></nav>
      }
    </header>`,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuOpen = false;
  scrolled = false;
  constructor(readonly whatsapp: WhatsAppService) {}
  @HostListener('window:scroll') onScroll(): void { this.scrolled = window.scrollY > 16; }
  closeMenu(): void { this.menuOpen = false; }
}
