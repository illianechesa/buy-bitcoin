import { Component, Input, OnInit } from '@angular/core';

import { OrderStatus } from 'src/app/core/enums';
import { Order } from 'src/app/core/interfaces/Order';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
})
export class OrderTableComponent implements OnInit {
  @Input() orders: Order[] = [];
  @Input() price?: number;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.orders.forEach((order) => {
      if (order.status === OrderStatus.PENDING && this.price && this.price <= order.price) {
        order.status = OrderStatus.COMPLETED;
      }
    });
  }

  get isEmpty(): boolean {
    return this.orders.length === 0;
  }
}
