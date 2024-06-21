import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any[] = []

  constructor(private productService:ProductService,private cartService:CartService) { }

  ngOnInit(): void {
    this.productService.getData().subscribe(
      (data:any[])=>{
      this.products = data.sort( (a,b) => b.id - a.id )
    })
  }

  addToCart (product:any) {
    console.log(product)
    this.cartService.addToCart({...product,quantity:1})
  }

}
