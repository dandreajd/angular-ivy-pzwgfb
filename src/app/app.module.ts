import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {CartComponent } from './cart/cart.component';
import {ShippingComponent } from './shipping/shipping.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HelloComponent },
    ]),
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ])
  ],
  declarations: [
    AppComponent, 
    HelloComponent, 
    ProductListComponent, 
    TopBarComponent, 
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],

  bootstrap: [AppComponent
  ],
})
export class AppModule {}


// @NgModule({
//   imports: [
//     BrowserModule,
//     FormsModule,
//     RouterModule.forRoot([{ path: '', component: ProductListComponent }]),
//   ],
//   declarations: [AppComponent, HelloComponent, ProductListComponent],
//   bootstrap: [AppComponent],
// })
