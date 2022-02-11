import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
})
/** table component*/
export class UserTableComponent {
    /** table ctor */

  data: any;
  token: any;
  httpOptions: object;

  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router, @Inject('BASE_URL') baseUrl: string) {
    this.token = localStorage.getItem("jwt");
    if (!this.token)//if token is inexistent then redirects to login
      this.router.navigate(['/login']);

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token//adds token as the Authorization header
      })
    };
    this.getData();
  }

  getData() {
    //loading data to populate the table
    this.http.get('/api/users', this.httpOptions).subscribe(result => {
      this.data = result;
    }, error => {
        //shows an error message
        this.toastr.error('Error Status: ' + error.status);
        if (error.status == 401)//if error is 401 the redirects to login
          this.router.navigate(['/login']);
    });
  }

  edit(id) {
    //redirects to the edit page
    window.open('/teachers/' + id);
  }

  remove(id, name) {
    //confirms before deleting
    if (confirm('Are you sure that you want to remove this registry? \r\n Name: ' + name))
      //making deletion call
      this.http.delete('/api/users/' + id, this.httpOptions).subscribe((data: any[]) => {
        //showing a success message
        this.toastr.success('Completed')
        //reloads the table
        this.getData();
      }, error => {
          if (error.status == 409)//if error is 409 let's user know that they can't delete themselves
            this.toastr.error('You cannot delete your own account! Error: ' + error.status);
          else //shows a generic error message
            this.toastr.error('Error Status: ' + error.status)
          if (error.status == 401)//if error is 401 the redirects to login
            this.router.navigate(['/login']);
      });
    else//alerting that deletion was cancelled
      this.toastr.warning('Action Cancelled');
  }

}
