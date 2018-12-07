import { ProductListComponent } from '../products/product-list/product-list.component';
import { ProductNewComponent } from '../products/product-new/product-new.component';
import { ProductEditComponent } from '../products/product-edit/product-edit.component';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';

export const productComponents: any[] = [
  ProductListComponent,
  ProductNewComponent,
  ProductEditComponent,
  ProductDetailsComponent
];

export * from './product-list/product-list.component';
export * from './product-new/product-new.component';
export * from './product-edit/product-edit.component';

