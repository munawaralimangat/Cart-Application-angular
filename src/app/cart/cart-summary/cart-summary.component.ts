import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cartSummary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  totalPrice$: Observable<number>;
  originalPrice = 1000
  constructor(private cartService: CartService) {
    this.totalPrice$ = this.cartService.cart$.pipe(
      map(items => this.cartService.getTotalPrice())
    );
  }

  ngOnInit(): void {
  }
}
