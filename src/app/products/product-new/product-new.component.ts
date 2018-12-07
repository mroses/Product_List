import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Product } from '../../models';
import { ProductService } from '../../services';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  product: Product = new Product();
  errors: string[] = [];

  @Output()
  createProduct = new EventEmitter<Product>();

  constructor(
    private readonly productService: ProductService,
    private readonly router: Router
  ) { }

  ngOnInit() {
  }
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.product);
    this.productService.createProduct(this.product).subscribe(newProduct => {
      this.createProduct.emit(this.product);
      console.log('new product', newProduct);
      this.product = new Product;
      this.router.navigateByUrl('/');
    },
      error => {
        console.log('error', error);
        this.errors = error.error;
      }
    );
  }
  onEvent(event: Event): void {
    event.stopPropagation();
  }
  onReset(event: Event, form: NgForm) {
    event.preventDefault();
    this.errors = [];
    form.reset();
    }
  }
