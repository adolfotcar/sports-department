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
export class NeighborhoodEditComponent {
  /** create ctor */

  data: any;
  token: any;
  httpOptions: object;
  mainId = 0;
  MyForm: FormGroup;
  submitted = false;
  EventValue: any = "Save";

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService, private route: ActivatedRoute, @Inject('BASE_URL') baseUrl: string) {
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
    http.get(baseUrl + 'api/neighborhoods/' + this.mainId, this.httpOptions).subscribe(result => {
      this.MyForm.controls["ID"].setValue(result["neighborhoodId"]);
      this.MyForm.controls["Name"].setValue(result["name"]);
    }, error => {
        //shows an error message
        this.toastr.error('Error Status: ' + error.status)
        if (error.status == 401)//if error is 401 the redirects to login
          this.router.navigate(['/login']);
    });
  }

  ngOnInit(): void {
    //initialize the html form
    this.MyForm = new FormGroup({
      ID: new FormControl(null),
      Name: new FormControl("", [Validators.required])
    });
  }

  Save() {
    this.submitted = true;

    if (this.MyForm.invalid) {
      return;//if any field is missing/invalid values then stops action
    }
    //creating the JSON object with the form fields
    var data = { neighborhoodId: this.mainId, name: this.MyForm.value.Name };
    var jData = JSON.stringify(data);
    this.http.put('api/neighborhoods/' + this.mainId, jData, this.httpOptions).subscribe((data: any[]) => {
      //showing a success message
      this.toastr.success('Data Saved');
      //redirects back to the table
      this.router.navigate(['/neighborhoods']);
    }, error => {
        //shows an error message
        this.toastr.error('Error Status: ' + error.status)
        if (error.status == 401)//if error is 401 the redirects to login
          this.router.navigate(['/login']);
    });
  }
}
