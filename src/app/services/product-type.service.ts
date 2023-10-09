import { Injectable } from '@angular/core';
import { CafeProductType } from './productType.model';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  productType: CafeProductType = [
    { typeName: 'Coffee' },
    { typeName: 'Tea' },
  ]

  constructor() { }

  getAllProductType() {
    return this.productType;
  }
}
