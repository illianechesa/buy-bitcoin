import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  readonly title = 'BuyBitcoin';
  readonly author = 'by Illia Nechesa Dernovyi';
  balance: number = 0;

  updateBalance(newBalance: number): void {
    this.balance = newBalance;
    console.log(this.balance);
  }
}
