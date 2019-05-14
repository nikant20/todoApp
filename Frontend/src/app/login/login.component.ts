import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router:Router) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.username==="nikant" && this.password==="nikant"){
      //Redirect to welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalidCredentials=false;
    }else{ 
      this.invalidCredentials=true;
    }
    
  }

}
