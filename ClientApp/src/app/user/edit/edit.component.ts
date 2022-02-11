import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
/** create component*/
export class UserEditComponent {
  /** create ctor */

  data: any;
  token: any;
  httpOptions: object;
  mainId = 0;
  MyForm: FormGroup;
  submitted = false;
  EventValue: any = "Save";

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router, private route: ActivatedRoute, @Inject('BASE_URL') baseUrl: string) {
    route.params.subscribe(params => this.mainId = params['ID']);
    this.token = localStorage.getItem("jwt");
    if (!this.token)//if token is inexistent then redirects to login
      this.router.navigate(['/login']);

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token//adds token as the Authorization header
      })
    };
    //loading data to populate the form fields
    http.get(baseUrl + 'api/users/' + this.mainId, this.httpOptions).subscribe(result => {
      this.MyForm.controls["ID"].setValue(result["id"]);
      this.MyForm.controls["Name"].setValue(result["name"]);
      this.MyForm.controls["Email"].setValue(result["email"]);
      this.MyForm.controls["Password"].setValue(result["password"]);
    }, error => {
        //shows an error message
        this.toastr.error("Error Status: " + error.status);
        if (error.status == 401)//if error is 401 the redirects to login
          this.router.navigate(['/login']);
    });
  }

  ngOnInit(): void {
    //initialize the html form
    this.MyForm = new FormGroup({
      ID: new FormControl(null),
      Name: new FormControl("", [Validators.required]),
      Email: new FormControl("", [Validators.required]),
      Password: new FormControl("", [Validators.required])
    });
  }

  Save() {
    this.submitted = true;

    if (this.MyForm.invalid) {
      return;//if any field is missing/invalid values then stops action
    }
    //creating the JSON object with the form fields
    var data = { id: this.mainId, name: this.MyForm.value.Name, email: this.MyForm.value.Email, password: this.MyForm.value.Password };
    var jData = JSON.stringify(data);
    this.http.put('api/users/' + this.mainId, jData, this.httpOptions).subscribe((data: any[]) => {
      //showing a success message
      this.toastr.success('Data Saved');
      //redirects to the table
      this.router.navigate(['/users']);
    }, error => {
        //shows an error message
        this.toastr.error('Error Status: ' + error.status)
        if (error.status == 401)//if error is 401 the redirects to login
          this.router.navigate(['/login']);
    });
  }
}
