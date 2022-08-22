import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token, User } from 'src/app/Models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url : string = "http://challenge-react.alkemy.org/"
constructor(private http: HttpClient) { }
 Login(authUser: User){
    return this.http.post(this.url, authUser)
 }

 AuthUser(token : any){

    return token;
 }

}
