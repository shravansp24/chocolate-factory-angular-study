import { Product } from './../../../models/product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  filterBy = "all";

  constructor(private productService: ProductService, private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.filterBy = this.route.snapshot.paramMap.get("filter");
    this.productList = this.productService.getProducts(this.filterBy);
  }

}
