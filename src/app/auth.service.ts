import { Injectable } from '@angular/core';

interface User {
  name:string;
  email:string,
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;
  private userName = '';
  private users:User[] = []


  constructor() {
    this.users.push({name:'test',email:'test@mail.com',password:'testPassword'});
   }

   login(email:string,password:string){
    const user = this.users.find((u)=> u.email == email && u.password == password )
    if(user){
      this.isLoggedIn = true
      this.userName = user.name
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
      this.isLoggedIn = true
      this.userName = name
      return true
    }
    return false
   }

   logOut():void {
    this.isLoggedIn = false
    this.userName = ''
   }

   isLoggedInUser ():boolean {
    console.log(this.isLoggedIn)
    return this.isLoggedIn
   }

   getUserName (){
    return this.userName
   }
}
