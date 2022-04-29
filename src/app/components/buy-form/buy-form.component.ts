import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NzMessageService } from 'ng-zorro-antd/message';
import { Pair } from 'src/app/core/enums';
import { Order } from 'src/app/core/interfaces';

@Component({
  selector: 'app-buy-form',
  templateUrl: './buy-form.component.html',
  styleUrls: ['./buy-form.component.less'],
})
export class BuyFormComponent implements OnInit {
  @Input() currentPrice: number = 40000;
  @Input() balance?: number;
  @Output() balanceChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() newOrder: EventEmitter<Order> = new EventEmitter<Order>();

  buyBitcoinForm: FormGroup;
  quitung: string = '';
  order?: Order;

  constructor(private formBuilder: FormBuilder, private messageService: NzMessageService) {
    this.buyBitcoinForm = this.formBuilder.group({
      btcQuantity: [null, [Validators.required]],
      busdAmount: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  confirmBuy(): void {
    const btcQuantity = this.buyBitcoinForm.controls['btcQuantity'].value;
    const busdAmount = this.buyBitcoinForm.controls['busdAmount'].value;
    if (this.balance !== undefined) {
      if (this.balance < busdAmount) {
        this.messageService.error('You do not have enough balance in your account. Please, deposit first');
      } else {
        this.order = this.createOrder(btcQuantity, busdAmount);
        this.balanceChange.emit(this.balance - busdAmount);
        this.newOrder.emit(this.order);
        this.messageService.success('Order created successfully');
      }
    }
  }

  btcQuantityChange(): void {
    this.buyBitcoinForm.controls['busdAmount']!.setValue(this.buyBitcoinForm.controls['btcQuantity'].value * this.currentPrice);
  }

  busdAmountChange(): void {
    this.buyBitcoinForm.controls['btcQuantity']!.setValue(this.buyBitcoinForm.controls['busdAmount'].value / this.currentPrice);
  }

  cancel(): void {
    this.messageService.info('Cancel');
  }

  getQuittung(): string {
    return `
    BTC: ${this.buyBitcoinForm.controls['btcQuantity'].value} / Amount: ${this.buyBitcoinForm.controls['busdAmount'].value} BUSD
    `;
  }

  private createOrder(btcQuantity: number, busdAmount: number): Order {
    return {
      date: new Date(),
      pair: Pair.BTCBUSD,
      quantity: btcQuantity,
      amount: busdAmount,
      price: this.currentPrice,
    };
  }
}
