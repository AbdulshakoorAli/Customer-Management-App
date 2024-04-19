import { Injectable } from '@angular/core';
import { Order } from '../../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor() { }

  orders: Order[] = [
    {
      id: 1,
      name: "BasketBall",
      amount: 7.99,
      customerId: 0
    },
    {
      id: 2,
      name: "Shoes",
      amount: 199.99,
      customerId: 0
    },
    {
      id: 3,
      name: "Apple",
      amount: 100,
      customerId: 1
    },
    {
      id: 1,
      name: "cricket",
      amount: 187.00,
      customerId: 1
    },
    {
      id: 1,
      name: "laptop",
      amount: 45.12,
      customerId: 2
    },
    {
      id: 1,
      name: "cycle",
      amount: 9.00,
      customerId: 2
    },
  ]
  
  getordersByCustomerId(customerId: number): Order[] {
   
    return this.orders.filter(order => order.customerId === customerId);
  }

}
