import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ProductTypeService } from 'src/app/services/product-type.service';
import { FormControl, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-createproducttype',
  templateUrl: './createproducts.component.html',
  styleUrls: ['./createproducts.component.css']
})
export class CreateproductsComponent implements OnInit{

  products = new FormGroup({
    Product_Name: new FormControl('',[Validators.required]),
    Product_Type: new FormControl('', [Validators.required]),
    Product_IsHot: new FormControl('', [Validators.required]),
    Product_IsCold: new FormControl('', [Validators.required]),
    Product_IsFrappe: new FormControl('', [Validators.required]),
    Product_Detail_Hot: new FormControl('', [Validators.required]),
    Product_Detail_Cold: new FormControl('', [Validators.required]),
    Product_Detail_Frappe: new FormControl('', [Validators.required]),
    Product_Price_Hot: new FormControl('', [Validators.required]),
    Product_Price_Cold: new FormControl('', [Validators.required]),
    Product_Price_Frappe: new FormControl('', [Validators.required]),
    Product_Img_Hot: new FormControl('', [Validators.required]), 
    Product_Img_Cold: new FormControl('', [Validators.required]), 
    Product_Img_Frappe: new FormControl('', [Validators.required]), 
  })

  previewLoaded: boolean = false;
  productTypes: any;
  showhot: boolean = false;
  showcold: boolean = false;
  showfrappe: boolean = false;

  constructor(
    private productsService: ProductsService,
    private productTypeService: ProductTypeService
  ) {
    console.log("hgj")
  }

  ngOnInit(): void {
    // this.productTypeService.restAllProductTypes().subscribe(data => {this.productTypes = data;});
    console.log("mgjhjhh")
    this.getAllProductTypes();
    console.log(this.productTypes)
  }

  onChangeImg(e:any){
    const file = e.target.files[0];
    var pattern = /image-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      this.products.reset();
    } 
    else { 
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.previewLoaded = true;
        this.products.patchValue({
          Product_Img_Hot: reader.result?.toString(),
          Product_Img_Cold: reader.result?.toString(),
          Product_Img_Frappe: reader.result?.toString()
        })
      }
    }
}

  createProduct() {
    console.log(this.products.value)
    this.productsService.createProduct(this.products.value).subscribe(
      data => {
        console.log(data)
        this.products.reset();
        this.previewLoaded = false;
      },
      err => {
        console.log(err);
      }
    );
  }

  getAllProductTypes() {
    try{
      this.productTypeService.restAllProductTypes().subscribe(
        data => {
          this.productTypes = data;
        },
        err => {
          console.log(err);
        }
      );
    } catch(err) {
      console.log(err);
    }
  }

  onClickHot(value : boolean){
    this.showhot = value;
  }

  onClickCold(value : boolean){
    this.showcold = value;
  }

  onClickFrappe(value : boolean){
    this.showfrappe = value;
  }

}
