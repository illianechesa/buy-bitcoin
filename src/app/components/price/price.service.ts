import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PriceService {
  constructor() {}

  getPrice(): number {
    return Math.floor(Math.random() * (40000 - 39000 + 1) + 39000);
  }
}
