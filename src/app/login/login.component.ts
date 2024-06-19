import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log('page rendered');
  }

  onSubmit(): void {
    // Handle form submission logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Remember Me:', this.rememberMe);
  }
}
