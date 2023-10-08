import { Injectable } from '@angular/core';
import { CafeProducts } from './products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  product_list: CafeProducts = [
    { p_id: 1, p_name: 'Espresso', isHot: 'Hot', isCold: 'Cold', isFrappe: 'Frappe', p_typeId: 1, p_type: { typeId: 1, typeName: 'Coffee' } },
    { p_id: 2, p_name: 'Tea', isHot: 'Hot', isCold: 'Cold', "isFrappe": 'Frappe', p_typeId: 2, p_type: { typeId: 2, typeName: 'Tea' } },
    { p_id: 3, p_name: 'Cappuccino', isHot: 'Hot', isCold: 'Cold', isFrappe: 'Frappe', p_typeId: 1, p_type: { typeId: 1, typeName: 'Coffee' } },
    { p_id: 4, p_name: 'Green Tea', isHot: 'Hot', isCold: 'Cold', isFrappe: 'Frappe', p_typeId: 2, p_type: { typeId: 2, typeName: 'Tea' } },
    { p_id: 5, p_name: 'ชาตึง', isHot: 'Hot', isCold: 'Cold', isFrappe: 'Frappe', p_typeId: 2, p_type: { typeId: 2, typeName: 'Tea' } },
  ]

  constructor() { }

  getAllProduct() {
    return this.product_list;
  }
}
