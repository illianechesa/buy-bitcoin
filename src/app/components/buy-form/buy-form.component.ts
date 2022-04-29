import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-buy-form',
  templateUrl: './buy-form.component.html',
  styleUrls: ['./buy-form.component.less'],
})
export class BuyFormComponent implements OnInit {
  @Input() currentPrice: number = 40000;
  @Input() balance?: number;
  @Output() balanceChange: EventEmitter<number> = new EventEmitter<number>();

  buyBitcoinForm: FormGroup;
  quitung: string = '';

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
        this.balanceChange.emit(1);
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
}
