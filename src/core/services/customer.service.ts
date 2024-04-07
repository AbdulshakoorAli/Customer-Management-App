import { Injectable } from '@angular/core';
import { Customer } from '../../models/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  customers: Customer[] = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3CY2byKxwKBtYMu24QRhDrssH700-5UT3iCDBLiGCA&s',
      firstName: 'John',
      lastName: 'Doe',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      orderTotal: 100
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3CY2byKxwKBtYMu24QRhDrssH700-5UT3iCDBLiGCA&s',
      firstName: 'Jane',
      lastName: 'Smith',
      address: '456 Elm St',
      city: 'Los Angeles',
      state: 'CA',
      orderTotal: 200
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3CY2byKxwKBtYMu24QRhDrssH700-5UT3iCDBLiGCA&s',
      firstName: 'Michael',
      lastName: 'Johnson',
      address: '789 Oak St',
      city: 'Chicago',
      state: 'IL',
      orderTotal: 150
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3CY2byKxwKBtYMu24QRhDrssH700-5UT3iCDBLiGCA&s',
      firstName: 'Emily',
      lastName: 'Brown',
      address: '101 Pine St',
      city: 'Houston',
      state: 'TX',
      orderTotal: 300
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3CY2byKxwKBtYMu24QRhDrssH700-5UT3iCDBLiGCA&s',
      firstName: 'David',
      lastName: 'Wilson',
      address: '202 Maple St',
      city: 'San Francisco',
      state: 'CA',
      orderTotal: 250
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3CY2byKxwKBtYMu24QRhDrssH700-5UT3iCDBLiGCA&s',
      firstName: 'Sarah',
      lastName: 'Davis',
      address: '303 Walnut St',
      city: 'Seattle',
      state: 'WA',
      orderTotal: 180
    }
  ];


}
