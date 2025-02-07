import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   
  constructor() {

   }

   login(username:string,email:string,role:string){

    localStorage.setItem('currentUser', JSON.stringify({ username, role }));
   }

   logout():void{
    localStorage.removeItem('currentUser');
   }
   getRole(): string | null {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser).role : null;
  }
}
