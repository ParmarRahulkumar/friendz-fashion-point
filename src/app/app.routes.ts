import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', title: "The Friendz Fashion Point | Men's Fashion", loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent) },
  { path: 'shop', title: 'Shop | The Friendz Fashion Point', loadComponent: () => import('./pages/shop/shop.component').then((m) => m.ShopComponent) },
  { path: 'shop/:id', title: 'Collection | The Friendz Fashion Point', loadComponent: () => import('./pages/product-details/product-details.component').then((m) => m.ProductDetailsComponent) },
  { path: 'about', title: 'Our Story | The Friendz Fashion Point', loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent) },
  { path: 'contact', title: 'Visit Us | The Friendz Fashion Point', loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent) },
  { path: '**', title: 'Page Not Found | The Friendz Fashion Point', loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent) }
];
