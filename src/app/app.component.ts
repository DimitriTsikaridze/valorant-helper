import { Component } from '@angular/core';
import { FooterComponent, HeaderComponent } from './layout';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  template: `
    <app-header />
    <div class="spacer"></div>
    <router-outlet />
    <app-footer />
  `,
  styles: [
    `
      .spacer {
        height: 92px;
        background-color: #0f1923;
      }
    `,
  ],

  standalone: true,
})
export class AppComponent {}
