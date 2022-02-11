import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  token: any;
  constructor(private router: Router) {
    //reading the JWT token that will be sent with every AJAX call
    this.token = localStorage.getItem("jwt");
    if (!this.token)
      this.router.navigate(['/login']);
  }
}
