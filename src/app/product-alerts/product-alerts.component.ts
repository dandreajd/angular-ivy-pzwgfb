import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../product-list/products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() product!: Product;
  @Output() notify = new EventEmitter();

}