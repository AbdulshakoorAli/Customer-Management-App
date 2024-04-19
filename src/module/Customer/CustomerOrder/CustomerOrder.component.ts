import { Component, OnInit } from '@angular/core';
import { Order } from '../../../models/order';
import { OrderService } from '../../../core/services/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-CustomerOrder',
  templateUrl: './CustomerOrder.component.html',
  styleUrls: ['./CustomerOrder.component.css']
})
export class CustomerOrderComponent implements OnInit {

  orders: Order[] = [];
  id!: number;
  total!: number;
  constructor(private orderService: OrderService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      const cid = params.get('id');
      if (cid !== null) {
        this.id = +cid;
      } else {
        this.id = 1;
      }
      this.orders = this.orderService.getordersByCustomerId(this.id);
      this.total = this.orders.reduce((total, order) => total + order.amount, 0);
    });
  }

}
