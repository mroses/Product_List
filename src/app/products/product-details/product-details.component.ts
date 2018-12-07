import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../services';
import { Product } from '../../models';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products: Product[] = [];
  errors: Error[] = [];
  @Input()
  product: Product;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productService: ProductService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.productService.getProduct(id).subscribe(product => (this.product = product));
    });
  }
  onDelete(id: number) {
    this.productService.removeProduct(id).subscribe(deletedProduct => {
      console.log('removed product', deletedProduct);
      this.product = null;
    });
  }
}
