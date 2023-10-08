import { Injectable } from '@angular/core';
import { CafeProducts } from './products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  product_list: CafeProducts = [
    { p_id: 1, p_name: 'Espresso', isHot: true, isCold: true, isFrappe: false, p_typeId: 1, p_type: { typeId: 1, typeName: 'Coffee' } },
    { p_id: 2, p_name: 'Tea', isHot: true, isCold: true, isFrappe: true, p_typeId: 2, p_type: { typeId: 2, typeName: 'Tea' } },
    { p_id: 3, p_name: 'Cappuccino', isHot: true, isCold: true, isFrappe: false, p_typeId: 1, p_type: { typeId: 1, typeName: 'Coffee' } },
    { p_id: 4, p_name: 'Green Tea',isHot: true, isCold: true, isFrappe: true, p_typeId: 2, p_type: { typeId: 2, typeName: 'Tea' } },
    { p_id: 5, p_name: 'ชาตึง', isHot: true, isCold: true, isFrappe: false, p_typeId: 2, p_type: { typeId: 2, typeName: 'Tea' } },
    { p_id: 6, p_name: 'ขาชูชู', isHot: true, isCold: true, isFrappe: true, p_typeId: 2, p_type: { typeId: 2, typeName: 'Tea' } },
    { p_id: 7, p_name: 'ชามั้ง', isHot: false, isCold: true, isFrappe: true, p_typeId: 2, p_type: { typeId: 2, typeName: 'Tea' } },
    { p_id: 8, p_name: 'แกฟะ', isHot: true, isCold: false, isFrappe: false, p_typeId: 1, p_type: { typeId: 1, typeName: 'Coffee' } },
    { p_id: 9, p_name: 'ชานี้ต้องปั่น', isHot: false, isCold: false, isFrappe: true, p_typeId: 2, p_type: { typeId: 2, typeName: 'Tea' } },
  ]

  constructor() { }

  getAllProduct() {
    return this.product_list;
  }
}
