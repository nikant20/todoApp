import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === "nikant" && password === "nikant") {
      return true;
    }
    return false;
  }
  
  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticateUser");

    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem("authenticateUser");
  }

}
