import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CafeProducts } from 'src/app/services/products.model';
import { ProductsService } from 'src/app/services/products.service';
import { ProductTypeService } from 'src/app/services/product-type.service';
import { HttpClient } from '@angular/common/http';
import { CafeProductType } from 'src/app/services/productType.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  List_products: any;

  searchText: string = '';

  productTypes!: any

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService:ProductsService,
    private activatedRoute: ActivatedRoute, 
    private productTypeService: ProductTypeService,
    private http: HttpClient,
    ) {

  }
  ngOnInit(): void {
    this.getAllProductTypes()
    this.getAllProducts()
  }

  onSearchTextEntered(seachValue: string) {
    this.searchText = seachValue;
    console.log(this.searchText);
  }

  SeachMatch(item: any): Boolean {
    if (this.searchText === '' || 
      item.Product_Name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.Product_Type.toLowerCase().includes(this.searchText.toLowerCase())) {
        return true
    } else return false;
  }

  ShowSeach(productType: string): Boolean {
    if ( this.List_products.find((x: { Product_Type: string; })  => x.Product_Type == productType && this.SeachMatch(x)) ) {
      return true;
    } else return false;
  }

  isCheck(bool: boolean): string {
    if(bool) {
      return "&#x2713;"
    } else return "&#x2715;"
  }

  getAllProductTypes() {
    this.http.get<any>('http://localhost:3000/productTypes').subscribe(
      response => {
        this.productTypes = response;
        console.log(this.productTypes);
      })
  }

  getAllProducts() {
    this.http.get<any>('http://localhost:3000/products').subscribe(
      response => {
        this.List_products = response;
        console.log(this.List_products);
      })
  }
}
