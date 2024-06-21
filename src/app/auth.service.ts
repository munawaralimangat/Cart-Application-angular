import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  name:string;
  email:string,
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private isLoggedIn = false;
  // private userName = '';
  private users:User[] = []

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable()

  private userNameSubject = new BehaviorSubject<string>('');
  userName$ = this.userNameSubject.asObservable()


  constructor() {
    this.users.push({name:'test',email:'test@mail.com',password:'testPassword'});
   }

   login(email:string,password:string){
    const user = this.users.find((u) => u.email == email && u.password == password )
    if(user){
      this.isLoggedInSubject.next(true)
      this.userNameSubject.next(user.name)
      return true
    }
    return false
   }

   signup(email:string,name:string,password:string){
    console.log('name',name)
    console.log('email',email)
    console.log('pass',password)

    if(email && name && password ){
      if(this.users.some(u => u.email == email)){
        return false
      }
      this.users.push({name,email,password})
      this.isLoggedInSubject.next(true)
      this.userNameSubject.next(name)
      return true
    }
    return false
   }

   logOut():void {
    this.isLoggedInSubject.next(false)
    this.userNameSubject.next('')
   }

   isLoggedInUser ():boolean {
    return this.isLoggedInSubject.getValue()
   }

   getUserName (){
    return this.userNameSubject.getValue()
   }
}
