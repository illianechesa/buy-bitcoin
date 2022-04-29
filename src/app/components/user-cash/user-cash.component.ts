import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NzMessageService } from 'ng-zorro-antd/message';
import { Currency } from 'src/app/core/enums';

@Component({
  selector: 'app-user-cash',
  templateUrl: './user-cash.component.html',
  styleUrls: ['./user-cash.component.less'],
})
export class UserCashComponent implements OnInit {
  @Input() balance: number = 0;
  @Output() balanceChange: EventEmitter<number> = new EventEmitter<number>();

  currency: Currency = Currency.BUSD;
  isDepositModalVisible = false;
  depositAmount?: number;

  depositAmountForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private message: NzMessageService) {
    this.depositAmountForm = this.formBuilder.group({
      amount: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  openDepositModal(): void {
    this.isDepositModalVisible = true;
  }

  handleConfirm(): void {
    this.updateBalance();
    this.resetAmountField();
    this.isDepositModalVisible = false;
    this.message.create('success', `Balance was updated`);
  }

  closeModal(): void {
    this.depositAmount = undefined;
    this.isDepositModalVisible = false;
    this.resetAmountField();
  }

  private updateBalance(): void {
    const newBalance = this.balance + this.depositAmountForm.controls['amount'].value;
    this.balanceChange.emit(newBalance);
    this.balance = newBalance;
  }

  private resetAmountField(): void {
    this.depositAmountForm.controls['amount'].reset();
  }
}
