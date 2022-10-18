import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  pdtList: IProduct[] = [{
    id: 1,
    name: 'Apple',
    category: 'Fruits',
    price: '$2.76'
  }, {
    id: 2,
    name: 'Cheese',
    category: 'Dairy',
    price: '$6.38'
  }, {
    id: 3,
    name: 'Orange',
    category: 'Fruits',
    price: '$4.85'
  }, {
    id: 4,
    name: 'Tomato',
    category: 'Vegetables',
    price: '$5.01'
  }, {
    id: 5,
    name: 'Table Cloth',
    category: 'Kitchen Essentials',
    price: '$6.13'
  }];

  constructor() { }

  getProducts(): IProduct[]{
    return this.pdtList;
  }

}
