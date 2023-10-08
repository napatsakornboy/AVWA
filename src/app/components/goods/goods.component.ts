import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  goods: any;
  goodsId: any;

  constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.goodsId = this.activatedRoute.snapshot.paramMap.get('id');
    this.goods = this.productService.getAllProduct().find(x => x.p_id == this.goodsId);
  }
}
