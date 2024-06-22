import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

interface User {
  id:string;
  name:string;
  email:string;
  password:string;   //hash later
  cart:CartItem[];
}

interface CartItem  {
  id:number;
  title:string;
  price:number;
  quantity:number;
  image:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  private currentUserSubject = new BehaviorSubject<User | null>(null)
  currentUser$ = this.currentUserSubject.asObservable()

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable()
  

  private users:User[] = []

  constructor(private router:Router) {
    const storedUsers = localStorage.getItem('users')
    if(storedUsers){
      this.users = JSON.parse(storedUsers)
    }

    const storedCurrentUser = localStorage.getItem('currentUser');
    if(storedCurrentUser){
      this.currentUserSubject.next(JSON.parse(storedCurrentUser));
      this.isLoggedInSubject.next(true)
    }
   }
   

   login(email:string,password:string): boolean{
    const user = this.users.find((u) => u.email == email && u.password == password )
    console.log(this.users)
    if(user){
      this.currentUserSubject.next(user);
      localStorage.setItem('currentUser',JSON.stringify(user))
      this.isLoggedInSubject.next(true)
      return true
    }
    return false
   }

   signup(email:string,name:string,password:string):boolean{

    if(email && name && password ){
      if(this.users.some(u => u.email == email)){
        return false
      }
      const newUser:User = {id:this.generateUserId(),name,email,password,cart:[]};
      this.users.push(newUser)
      this.saveUsers()
      this.currentUserSubject.next(newUser)
      localStorage.setItem('currentUser',JSON.stringify(newUser))
      this.isLoggedInSubject.next(true)
      return true
    }
    return false
   }

   logOut():void {
    localStorage.removeItem('currentUser')
    this.isLoggedInSubject.next(false)
    this.currentUserSubject.next(null)
    this.router.navigate(['/login'])
   }

   isLoggedInUser ():boolean { //
    return this.isLoggedInSubject.getValue()
   }

   getCurrentUser (){ //
    return this.currentUserSubject.getValue()
   }

   generateUserId():string { //
    return Math.random().toString(36).substr(2,9)
   }

   saveUsers () { //
    localStorage.setItem('users',JSON.stringify(this.users))
   }

  updateUserCart(cart: CartItem[]): void {
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      currentUser.cart = cart;
      this.saveUsers();
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
  }
}
