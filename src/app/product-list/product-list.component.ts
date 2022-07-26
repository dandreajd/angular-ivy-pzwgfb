import { Component, OnInit } from '@angular/core';

import { products } from './products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
}) //implements OnInit
export class ProductListComponent {
  constructor() {}
  products = products;

  ngOnInit() {}

  share() {
    window.alert('The product has been shared!');
  }

  onNotify(product) {
    window.alert('You will be notified when the product goes on sale: '+ product.name);
  }
}
