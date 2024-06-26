import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AuthService } from "../auth.service";
import { ToastrService } from 'ngx-toastr';

interface CartItem  {
    id:number;
    title:string;
    price:number;
    quantity:number;
    image:string
}


@Injectable({
    providedIn:'root'
})

export class CartService {
    private cart = new BehaviorSubject<CartItem[]>([])
    cart$ = this.cart.asObservable()

    constructor (private authService:AuthService,private toastr:ToastrService) {
        this.authService.currentUser$.subscribe(currentUser => {
            if(currentUser && currentUser.cart) {
                this.cart.next(currentUser.cart)
            }else{
                this.cart.next([])
            }
        })
     }
    private updateCartStorage (){
        const currentCart = this.cart.value
        this.authService.updateUserCart(currentCart)
    }

    getCart () {
        return this.cart.value
    }

    addToCart(item: CartItem) {
        const currentCart = this.cart.value;
        const itemIndex = currentCart.findIndex( cartItem => cartItem.id == item.id )
        if(itemIndex > -1){
            currentCart[itemIndex].quantity += item.quantity
        }else{
            currentCart.push(item)
        }
        this.cart.next(currentCart)
        this.updateCartStorage()
      }

    incrementQuantity (itemId:number) {
        const currentCart = this.cart.value
        const itemIndex = currentCart.findIndex( cartItem => cartItem.id == itemId )
        if(itemIndex > -1 ){
            currentCart[itemIndex].quantity += 1
            this.cart.next(currentCart)
            this.updateCartStorage()
        }
        console.log(currentCart)
    }

    decrementQuantity (itemId:number) {
        const currentCart = this.cart.value
        const itemIndex = currentCart.findIndex(cartItem => cartItem.id == itemId )
        if(itemIndex > -1){
            currentCart[itemIndex].quantity -= 1
            if(currentCart[itemIndex].quantity < 1){
                this.toastr.success('Removed from cart')
                currentCart.splice(itemIndex,1)
            }
            this.cart.next(currentCart)
            this.updateCartStorage();
        }
    }

    removeFromCart (itemId:number) {
        const currentCart = this.cart.value.filter( cartItem => cartItem.id !== itemId)
        this.cart.next(currentCart)
        this.updateCartStorage();
    }

    getTotalPrice () {
        return this.cart.value.reduce( (acc,item)=>acc + item.price * item.quantity,0 )
    }
}