import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from '../module/Orders/Orders.component';
import { AboutComponent } from '../module/About/About.component';
import { LoginComponent } from '../module/Login/Login.component';
import { CustomersComponent } from '../module/Customers/Customers.component';
import { CardViewCustomerComponent } from '../module/Customers/CardViewCustomer/CardViewCustomer.component';
import { CreateCustomerComponent } from '../module/Customers/CreateCustomer/CreateCustomer.component';
import { MapViewCustomerComponent } from '../module/Customers/MapViewCustomer/MapViewCustomer.component';
import { ListViewCustomerComponent } from '../module/Customers/ListViewCustomer/ListViewCustomer.component';
import { CustomerComponent } from '../module/Customer/Customer.component';
import { CustomerDetailComponent } from '../module/Customer/CustomerDetail/CustomerDetail.component';
import { CustomerOrderComponent } from '../module/Customer/CustomerOrder/CustomerOrder.component';
import { CustomerEditComponent } from '../module/Customer/CustomerEdit/CustomerEdit.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  {
    path: 'customers',
    component: CustomersComponent,
    children: [
      { path: '', redirectTo: 'card-view', pathMatch: 'full' },
      { path: 'card-view', component: CardViewCustomerComponent },
      { path: 'list-view', component: ListViewCustomerComponent },
      { path: 'create', component: CreateCustomerComponent },
      { path: 'map-view', component: MapViewCustomerComponent },
    ]
  },
  {
    path: 'customer',
    component: CustomerComponent,
    children: [
      { path: '', redirectTo: 'customer-details', pathMatch: 'full' },
      { path: 'customer-details', component: CustomerDetailComponent },
      { path: 'customer-details/:id', component: CustomerDetailComponent },     
      { path: 'customer-orders/:id', component: CustomerOrderComponent },     
      { path: 'customer-edit/:id', component: CustomerEditComponent },  
    ]
  },
  { path: 'orders', component: OrdersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
