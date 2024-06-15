import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name:string = '';
  email:string = '';
  password:string = '';
  confirmPassword:string = ''

  constructor() { }

  ngOnInit(): void {
    console.log('page rendered')
  }

  onSubmit():void {
    console.log(this.name)
    console.log(this.password)
    console.log(this.email)
    console.log(this.confirmPassword)
  }
}
