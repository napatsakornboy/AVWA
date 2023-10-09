import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  product: any;

  constructor(private productService: ProductsService,
              private activatedRoute: ActivatedRoute,
              private http: HttpClient
              ) {}

  ngOnInit(): void {
    this.getOneProduct();
  }

  getOneProduct() {
    let product_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get<any>(`http://localhost:3000/products/${product_id}`).subscribe(
      response => {
        this.product = response;
        console.log(this.product);
      })
  }
}
