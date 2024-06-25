import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { ToastrService } from 'ngx-toastr';

@Component({
    selector:'app-cartItem',
    templateUrl:'./cart-item.component.html',
    styleUrls:['./cart-item.component.css']
})

export class CartItemComponent implements OnInit {
    
    cartItems$ = this.cartService.cart$

    constructor(private cartService:CartService,private toastr:ToastrService){}
    
    ngOnInit(): void {
    }

    incrementQuantity(itemId: number) {
        this.cartService.incrementQuantity(itemId)
      }

    decrementQuantity (itemId:number) {
        this.cartService.decrementQuantity(itemId)
    }

    removeFromCart (itemId:number) {
        this.show()
        this.cartService.removeFromCart(itemId)
    }

    show(){
        this.toastr.success('Removed from cart')
    }
}