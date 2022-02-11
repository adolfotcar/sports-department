import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  username = "User";

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  token: any;
  constructor(private router: Router) {
    this.token = localStorage.getItem("jwt");
    this.username = localStorage.getItem("username");//to create the hello message
  }

  logOut() {
    localStorage.removeItem("jwt");//removing jwt from client side
    localStorage.removeItem("username");
    this.token = null;
    this.router.navigate(['/login']); //redirects to login
  }
}
