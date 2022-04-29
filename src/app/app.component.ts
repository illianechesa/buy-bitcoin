import { Component } from '@angular/core';

import { Order } from './core/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  readonly title = 'BuyBitcoin';
  readonly author = 'by Illia Nechesa Dernovyi';
  balance: number = 100000;
  currentPrice: number = 40000;
  orders: Order[] = [];

  updateCurrentPrice(newPrice: number): void {
    this.currentPrice = newPrice;
  }

  newOrder(order: Order): void {
    this.orders.push(order);
  }
}
