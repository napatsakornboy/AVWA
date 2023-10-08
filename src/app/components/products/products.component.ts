import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CafeProducts } from 'src/app/services/products.model';
import { ProductsService } from 'src/app/services/products.service';
import { ProductTypeService } from 'src/app/services/product-type.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product_list: CafeProducts = this.getAllProducts()

  searchText: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private productsService:ProductsService,
    private activatedRoute: ActivatedRoute, private productTypeService: ProductTypeService)
    {

  }
  ngOnInit(): void {
    console.log(this.product_list.length)
    console.log(this.product_list[0].p_id);
  }

  handleOnclick(){
    //this.router.navigate(['products/1']);
    console.log("route ok");
  }

  getAllProducts() {
    return this.productsService.getAllProduct()
  }

  getAllProductType() {
    console.log(this.productTypeService.getAllProductType());
    return this.productTypeService.getAllProductType();
  }

  onSearchTextEntered(seachValue: string) {
    this.searchText = seachValue;
    console.log(this.searchText);
  }

  SeachMatch(item: any): Boolean {
    if (this.searchText === '' || 
      item.p_name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.p_type.typeName.toLowerCase().includes(this.searchText.toLowerCase())) {
        return true
    } else return false;
  }

  ShowSeach(productType: string): Boolean {
    if ( this.product_list.find(x => x.p_type.typeName == productType && this.SeachMatch(x)) ) {
      return true;
    } else return false;
  }

  isCheck(bool: boolean): string {
    if(bool) {
      return "&#x2713;"
    } else return "&#x2715;"
  }
}
