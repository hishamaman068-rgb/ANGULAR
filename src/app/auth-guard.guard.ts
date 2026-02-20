import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  canActivate(): boolean {

    let isLoggedIn = false;  

    if (isLoggedIn) {
      return true;
    } else {
      alert("You cannot open this page");
      return false;
    }

  }
}
