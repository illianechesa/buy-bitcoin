import { Component, Input, OnInit } from '@angular/core';

import { Order } from 'src/app/core/interfaces/Order';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.less'],
})
export class OrderTableComponent implements OnInit {
  @Input() orders: Order[] = [];

  constructor() {}

  ngOnInit(): void {}

  get isEmpty(): boolean {
    return this.orders.length === 0;
  }
}
