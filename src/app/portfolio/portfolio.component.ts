import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  portfolioItems: Array<any> = [
    { id: 1, name: 'Web DESIGN' },
    { id: 2, name: 'MOBILE DESIGN' },
    { id: 3, name: 'LOGO DESIGN' },
    { id: 4, name: 'WEB APPLICATION DEVELOPMENT' },
    { id: 5, name: 'MOBILE APPLICATION DEVELOPMENT' },
    { id: 6, name: 'PWA DEVELOPMENT' },
  ];
}
