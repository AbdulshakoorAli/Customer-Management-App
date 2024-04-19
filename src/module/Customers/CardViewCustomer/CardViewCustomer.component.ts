import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/customer.interface';
import { CustomerService } from '../../../core/services/customer.service';

@Component({
  selector: 'app-CardViewCustomer',
  templateUrl: './CardViewCustomer.component.html',
  styleUrls: ['./CardViewCustomer.component.css']
})
export class CardViewCustomerComponent implements OnInit {

  customers:Customer[] = [];

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.customers = this.customerService.customers;
  }

}
