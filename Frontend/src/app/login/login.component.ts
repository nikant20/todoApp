import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="nikant";
  password="nikant";
  errorMessage="Invalid Credentials";
  invalidCredentials=false;

  //Need an component of router for redirecting it to some other page. It is similar to constructor injection in spring
  constructor(private router:Router,
    private hardcodedAuthenticatioService:HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
   // if(this.username==="nikant" && this.password==="nikant"){
   // console.log("Before "+this.isUserLoggedIn());  
   if(this.hardcodedAuthenticatioService.authenticate(this.username,this.password)){  
    //console.log("After "+this.isUserLoggedIn());
     
   //Redirect to welcome page
      sessionStorage.setItem("authenticateUser",this.username);
      this.router.navigate(['welcome', this.username]);
      this.invalidCredentials=false;
    }else{ 
      this.invalidCredentials=true;
    } 
  }
}
