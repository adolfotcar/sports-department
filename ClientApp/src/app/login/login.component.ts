import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
/** login component*/
export class LoginComponent {
  invalidLogin: boolean;
/** login ctor */
  constructor(private http: HttpClient, private router: Router, @Inject('BASE_URL') baseUrl: string) {

  }

  login(form: NgForm) {
    const credentials = JSON.stringify(form.value);
    this.http.post("/api/auth/login", credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      const username = (<any>response).userName;
      //saves the token on the client side
      localStorage.setItem("jwt", token);
      localStorage.setItem("username", username)

      this.invalidLogin = false;
      //redirects to the dashboard
      this.router.navigate(["/"]);
    }, err => {
      this.invalidLogin = true;
    });
  }
}
