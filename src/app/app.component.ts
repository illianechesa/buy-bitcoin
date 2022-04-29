import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  readonly title = 'BuyBitcoin';
  readonly author = 'by Illia Nechesa Dernovyi';
  balance?: number;
  currentPrice: number = 40000;

  updateCurrentPrice(newPrice: number): void {
    this.currentPrice = newPrice;
  }
}
