import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any[] = []

  constructor(private productService:ProductService,private cartService:CartService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.productService.getData().subscribe(
      (data:any[])=>{
      this.products = data.sort( (a,b) => b.id - a.id )
    })
  }

  showSucces(){
    this.toastr.success('Item added to cart')
  }

  addToCart (product:any) {
    this.showSucces()
    this.cartService.addToCart({...product,quantity:1})
  }

}
