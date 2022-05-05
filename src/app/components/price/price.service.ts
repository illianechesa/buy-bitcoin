import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PriceService {
  MAX_BTC_VALUE: number = 40100;
  MIN_BTC_VALUE: number = 39900;

  constructor() {}

  getPrice(): number {
    return Math.floor(Math.random() * (this.MAX_BTC_VALUE - this.MIN_BTC_VALUE + 1) + this.MIN_BTC_VALUE);
  }
}
