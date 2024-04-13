import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/customer.interface';
import { CustomerService } from '../../../core/services/customer.service';

@Component({
  selector: 'app-CustomerDetail',
  templateUrl: './CustomerDetail.component.html',
  styleUrls: ['./CustomerDetail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer!:Customer;
  id!:number;

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    
   // alert(this.customerService.get_index());

    // alert(this.id);
  }

}
