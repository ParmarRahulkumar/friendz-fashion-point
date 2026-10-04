import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: '<app-navbar /><main><router-outlet /></main><app-footer />',
  styles: [':host { display: block; min-height: 100vh; } main { min-height: 50vh; }']
})
export class AppComponent {}
