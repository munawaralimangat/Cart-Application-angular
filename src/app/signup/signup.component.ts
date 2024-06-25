import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

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
  userName:string | undefined = ''

  constructor(private authService:AuthService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {}

  onSubmit():void {
    const name = this.name;
    const email = this.email;
    const password = this.password
    const confirmPassword = this.confirmPassword

    if(password !== confirmPassword){
      alert('password mismatch')
      this.password = ''
      this.confirmPassword = ''
      return 
    }

    const registered = this.authService.signup(email,name,password)

    if(registered){
      this.router.navigate(['/'])
      this.authService.currentUser$.subscribe(user => this.userName = user?.name)
      this.showSuccess(this.userName)
    }else{
      console.log('signup failed')
      this.name = '';
      this.email = '';
      this.password = '';
      this.confirmPassword = '';
    }
  }

  showSuccess(userName:any){
    this.toastr.success(userName,'Signup successfull')
  }
}
