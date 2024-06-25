import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredProducts: any[] = [];

  constructor(private productService: ProductService,private cartService:CartService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.productService.getData().subscribe(
      (data: any[]) => {
      this.featuredProducts = data.filter(product => product.rating.rate > 3.5).slice(0,4)
      console.log(data)
    });
  }

  showSuccess() {
    this.toastr.success('Item added to cart');
  }

  addToCart(item:any){
    this.showSuccess()
    this.cartService.addToCart({...item,quantity:1})
  }

}
