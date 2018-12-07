import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../models';
import { ProductService } from '../../services';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  @Input()
  product: Product = new Product();
  errors: string[] = [];

  constructor(
    private readonly productService: ProductService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id);

      this.productService.getProduct(id).subscribe(product => {
        this.product = product;
        console.log(this.product);
      });
    });
  }

  onEdit(event: Event, form: NgForm) {
    event.preventDefault();
    this.productService.updateProduct(this.product).subscribe(updatedProduct => {
      console.log('updated product:', updatedProduct);
      this.product = new Product;
      this.router.navigateByUrl('/');
    },
      errors => {
        console.log('error', errors);
        this.errors = errors.error;
        console.log(this.errors);
      });
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
