import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Currency } from 'src/app/core/enums';

@Component({
  selector: 'app-user-cash',
  templateUrl: './user-cash.component.html',
  styleUrls: ['./user-cash.component.less'],
})
export class UserCashComponent implements OnInit {
  @Output() balanceAdded: EventEmitter<number> = new EventEmitter<number>();

  availableCash: number = 0;
  currency: Currency = Currency.BUSD;
  isDepositModalVisible = false;
  depositAmount?: number;

  depositAmountForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.depositAmountForm = this.formBuilder.group({
      amount: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  openDepositModal(): void {
    this.isDepositModalVisible = true;
  }

  handleConfirm(): void {
    const newBalance = this.availableCash + this.depositAmountForm.controls['amount'].value;
    this.balanceAdded.emit(newBalance);
    this.availableCash = newBalance;
    this.isDepositModalVisible = false;
    this.resetAmountField();
  }

  closeModal(): void {
    this.depositAmount = undefined;
    this.isDepositModalVisible = false;
    this.resetAmountField();
  }

  private resetAmountField(): void {
    this.depositAmountForm.controls['amount'].reset();
  }
}
