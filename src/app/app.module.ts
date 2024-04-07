import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { OrdersModule } from '../module/Orders/Orders.module';
import { AboutModule } from '../module/About/About.module';
import { LoginModule } from '../module/Login/Login.module';
import { CustomersModule } from '../module/Customers/Customers.module';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
   ],
   imports: [
	 BrowserModule,
	 AppRoutingModule,
    CustomersModule,
	 OrdersModule,
	 AboutModule,
	 LoginModule
	],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
