import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { Subject, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Currency, Volatility } from 'src/app/core/enums';

import { PriceService } from './price.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.less'],
})
export class PriceComponent implements OnInit, OnDestroy {
  @Input() currentPrice: number = 40000;
  @Output() currentPriceChange: EventEmitter<number> = new EventEmitter<number>();

  MAX_BTC_VALUE: number = 40100;
  MIN_BTC_VALUE: number = 39900;

  private destroy$ = new Subject<void>();

  price: number = 40000;
  volatility = Volatility;
  wentUp: Volatility = Volatility.EQUAl;
  percentageVariation: string = '';
  currency = Currency;

  constructor(private priceService: PriceService) {}

  ngOnInit(): void {
    this.initiatePricesLoop();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  updateNewPrice(newPrice: number): void {
    this.percentageVariation = this.percentagePriceVariation(newPrice);
    this.wentUp = newPrice > this.price ? Volatility.UP : Volatility.DOWN;
    this.currentPriceChange.emit(newPrice);
    this.price = newPrice;
  }

  get pairBTCBUSD(): string {
    return `${this.currency.BTC} / ${this.currency.BUSD}`;
  }

  private percentagePriceVariation(newValue: number): string {
    return `${(((newValue - this.price) / this.price) * 100).toFixed(2)} %`;
  }

  private initiatePricesLoop(): void {
    interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          const newPrice = this.priceService.getPrice();
          this.updateNewPrice(newPrice);
        },
      });
  }
}
