import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface cartItem  {
    id:Number;
    title:String;
    price:Number;
    quantitiy:Number;
    image:String
}


@Injectable({
    providedIn:'root'
})

export class cartService {
    private cart = new BehaviorSubject<cartItem[]>([])
    cart$ = this.cart.asObservable()

    constructor() {
        console.log('ggg',this.cart)
    }

    getCart () {
        return this.cart.value
    }

    addToCart () {

    }

    incrementCart () {

    }

    decrementCart () {

    }

    removeFromCart () {

    }

    getTotalPrice () {

    }
}