import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredProducts: any[] = [];

  constructor(private productService: ProductService,private cartService:CartService) { }

  ngOnInit(): void {
    this.productService.getData().subscribe(
      (data: any[]) => {
      this.featuredProducts = data.filter(product => product.rating.rate > 3.5).slice(0,4)
      console.log(data)
    });
  }

  addToCart(item:any){
    console.log(item)
    this.cartService.addToCart({...item,quantity:1})
  }

}
