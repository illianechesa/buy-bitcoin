import { Component, OnInit } from '@angular/core';

import { Currency, Volatility } from 'src/app/core/enums';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.less'],
})
export class PriceComponent implements OnInit {
  MAX_BTC_VALUE: number = 40100;
  MIN_BTC_VALUE: number = 39900;

  price: number = 40000;
  volatility = Volatility;
  wentUp: Volatility = Volatility.EQUAl;
  percentageVariation: string = '';
  currency = Currency;

  constructor() {}

  ngOnInit(): void {
    this.initiatePricesLoop();
  }

  get pairBTCBUSD(): string {
    return `${this.currency.BTC} / ${this.currency.BUSD}`;
  }

  private randomIntervalValue(): number {
    return Math.floor(Math.random() * (40000 - 39000 + 1) + 39000);
  }

  private percentagePriceVariation(newValue: number): string {
    return `${(((newValue - this.price) / this.price) * 100).toFixed(2)} %`;
  }

  private initiatePricesLoop(): void {
    setInterval(() => {
      const newPrice = this.randomIntervalValue();
      this.percentageVariation = this.percentagePriceVariation(newPrice);
      this.wentUp = newPrice > this.price ? Volatility.UP : Volatility.DOWN;
      this.price = newPrice;
    }, 1000);
  }
}
