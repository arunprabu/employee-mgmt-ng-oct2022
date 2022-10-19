import { Component, OnInit } from '@angular/core';
import { CartDataService } from 'src/app/shared/services/cart-data.service';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styles: [
  ]
})
export class CartViewComponent implements OnInit {

  cartItems!: IProduct[]; 

  constructor( private cartDataService: CartDataService) { }

  ngOnInit(): void {
    this.cartDataService.latestCartItems.subscribe( (cartItems: IProduct[]) => {
      this.cartItems = cartItems;
    });
  }

}
