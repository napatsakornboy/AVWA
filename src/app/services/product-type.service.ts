import { Injectable } from '@angular/core';
import { CafeProductType } from './productType.model';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  productType: CafeProductType = [
    { typeId: 1, typeName: 'Coffee' },
    { typeId: 2, typeName: 'Tea' },
  ]

  constructor() { }

  getAllProductType() {
    return this.productType;
  }
}
