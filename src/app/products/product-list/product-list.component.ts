import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) {
    this.products = [];
  }

  public products: Product[];

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(
        products => {
          this.products = products;
          console.log(products);
        },
        error => console.log(error)
      );
  }
}
