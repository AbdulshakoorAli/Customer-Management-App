import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './Customer.component';
import { CustomerInformationTabsComponent } from '../../components/CustomerInformationTabs/CustomerInformationTabs.component';
import { CustomerDetailComponent } from './CustomerDetail/CustomerDetail.component';
import { RouterModule } from '@angular/router';
import { CustomerEditComponent } from './CustomerEdit/CustomerEdit.component';
import { CustomerOrderComponent } from './CustomerOrder/CustomerOrder.component';

@NgModule({
  imports: [
    CommonModule,   
    RouterModule    
  ],
  declarations: [
    CustomerComponent,
    CustomerDetailComponent,
    CustomerInformationTabsComponent,
    CustomerEditComponent,
    CustomerOrderComponent
    
  ]
})
export class CustomerModule { }
