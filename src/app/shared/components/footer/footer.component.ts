import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer', standalone: true, imports: [RouterLink],
  template: `
    <footer class="footer"><div class="footer-top"><div class="footer-brand"><img src="assets/the-friendz-fashion-point-logo.png" alt="The Friendz Fashion Point logo"><div><span class="eyebrow">STYLE, WITH A PERSONAL TOUCH</span><h2>The Friendz<br>Fashion Point</h2><p>Good style should feel like you. Find your next favourite, right here.</p></div></div>
      <div class="footer-column"><span class="eyebrow">EXPLORE</span><a routerLink="/about">Our story</a><a routerLink="/contact">Visit our store</a></div>
      <div class="footer-column"><span class="eyebrow">COME BY</span><p>Shop No. 13, Nilkanth Shopping Center,<br>Nava Road, Khalal</p><a routerLink="/contact" class="footer-link">Store details</a></div>
      <div class="footer-column"><span class="eyebrow">SAY HELLO</span><a href="https://wa.me/917984808868" target="_blank" rel="noopener noreferrer">WhatsApp · +91 79848 08868</a><a href="https://www.instagram.com/the_friendz_fashion_point/reels/?__pwa=1#" target="_blank" rel="noopener noreferrer">Instagram · @the_friendz_fashion_point</a><a routerLink="/contact">Opening hours · ask in store</a></div></div>
      <div class="footer-bottom"><span>? {{ year }} The Friendz Fashion Point</span><span>Owned by Mehul Parmar &amp; Gaurav Parmar</span><span>Khalal, Gujarat</span></div>
    </footer>`, styleUrl: './footer.component.scss'
})
export class FooterComponent { readonly year = new Date().getFullYear(); }
