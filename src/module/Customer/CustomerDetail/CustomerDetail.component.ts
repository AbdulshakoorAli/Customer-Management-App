import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/customer.interface';
import { CustomerService } from '../../../core/services/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-CustomerDetail',
  templateUrl: './CustomerDetail.component.html',
  styleUrls: ['./CustomerDetail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer!:Customer;
  id!:number;

  constructor(private customerService:CustomerService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const currid = params.get('id');
      if(currid!==null) {
        this.id = +currid;
      } else {
        this.id = 1;
      }
      this.customer = this.customerService.getCustomerById(this.id);
    });
  }

}
