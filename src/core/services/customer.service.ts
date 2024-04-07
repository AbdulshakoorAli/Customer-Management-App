import { Injectable } from '@angular/core';
import { Customer } from '../../models/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  customers: Customer[] = [
    {
      image: 'https://example.com/customer1.jpg',
      firstName: 'John',
      lastName: 'Doe',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      orderTotal: 100
    },
    {
      image: 'https://example.com/customer2.jpg',
      firstName: 'Jane',
      lastName: 'Smith',
      address: '456 Elm St',
      city: 'Los Angeles',
      state: 'CA',
      orderTotal: 200
    },
    {
      image: 'https://example.com/customer3.jpg',
      firstName: 'Michael',
      lastName: 'Johnson',
      address: '789 Oak St',
      city: 'Chicago',
      state: 'IL',
      orderTotal: 150
    },
    {
      image: 'https://example.com/customer4.jpg',
      firstName: 'Emily',
      lastName: 'Brown',
      address: '101 Pine St',
      city: 'Houston',
      state: 'TX',
      orderTotal: 300
    },
    {
      image: 'https://example.com/customer5.jpg',
      firstName: 'David',
      lastName: 'Wilson',
      address: '202 Maple St',
      city: 'San Francisco',
      state: 'CA',
      orderTotal: 250
    },
    {
      image: 'https://example.com/customer6.jpg',
      firstName: 'Sarah',
      lastName: 'Davis',
      address: '303 Walnut St',
      city: 'Seattle',
      state: 'WA',
      orderTotal: 180
    }
  ];


}
