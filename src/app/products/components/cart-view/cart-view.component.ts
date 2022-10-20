import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartDataService } from 'src/app/shared/services/cart-data.service';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styles: [
  ]
})
export class CartViewComponent implements OnInit, OnDestroy {

  cartItems!: IProduct[]; 
  cartItemsSubscription!: Subscription;

  constructor( private cartDataService: CartDataService) { }

  ngOnInit(): void {
    this.cartItemsSubscription = this.cartDataService.latestCartItems.subscribe( (cartItems: IProduct[]) => {
      console.log(cartItems);
      this.cartItems = cartItems;
    });
  }

  ngOnDestroy(): void {
    if (this.cartItemsSubscription){
      this.cartItemsSubscription.unsubscribe();
    }
  }

}
