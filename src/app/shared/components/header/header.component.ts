import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/products/models/iproduct';
import { CartDataService } from '../../services/cart-data.service';
import { NavigationHelper } from '../../utils/navigation-helper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartCount = 0;

  constructor(public navigationHelper: NavigationHelper, private cartDataService: CartDataService) { }

  ngOnInit(): void {
    this.cartDataService.latestCartItems.subscribe( (cartItems: IProduct[]) => {
      console.log(cartItems);
      this.cartCount = cartItems.length;
    });
  }
}
