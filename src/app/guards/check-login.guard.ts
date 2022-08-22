
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import {  Observable } from 'rxjs';
import { LoginService } from '../service/login/login.service';
@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
  id: any
  token: any
  redeirect: any
  constructor(public login : LoginService , public route: Router ){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.token = localStorage.getItem('Token')
 
    
   
    if(!this.token){
      
      this.route.navigate([''])
      return false;
 }else{
   return true;
 }

}


}
  
    
   
  
 
  
 


  

  

  
  
  

