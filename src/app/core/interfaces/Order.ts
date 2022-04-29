import { Pair } from '../enums';

export interface Order {
  date: Date;
  pair: Pair;
  quantity: number;
  amount: number;
  price: number;
}
