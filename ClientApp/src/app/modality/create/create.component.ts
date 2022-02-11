import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html'
})
/** create component*/
export class ModalityCreateComponent {
  data: any;
  token: any;
  httpOptions: object;
  teacherId: any;
  teachers: any;
  MyForm: FormGroup;
  submitted = false;
  EventValue: any = "Save";
    /** create ctor */
  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router, @Inject('BASE_URL') baseUrl: string) {
    this.token = localStorage.getItem("jwt");
    if (!this.token) //if token is inexistent then redirects to login
      this.router.navigate(['/login']);

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token//adds token as the Authorization header
      })
    };
    this.getTeachers();
  }

  ngOnInit(): void {
    //initialize the html form
    this.MyForm = new FormGroup({
      ID: new FormControl(null),
      Name: new FormControl("", [Validators.required]),
      TeacherId: new FormControl("", [Validators.required])
    });
  }

  getTeachers() {
    //load the teachers that will be used in the dropdown
    this.http.get('/api/teachers', this.httpOptions).subscribe(result => {
      this.teachers = result;
    }, error => {
         //shows an error message
        this.toastr.error('Error Status: ' + error.status);
        if (error.status == 401)//if error is 401 the redirects to login
          this.router.navigate(['/login']);
    });
  } 

  Save() {
    this.submitted = true;

    if (this.MyForm.invalid) {
      return; //if any field is missing/invalid values then stops action
    }

    //creating the JSON object with the form fields. ID is 0 as it was not created yet
    var data = { modalityId: 0, Name: this.MyForm.value.Name, teacherId: this.MyForm.value.TeacherId };
    var jData = JSON.stringify(data);
    this.http.post('api/modalities', jData, this.httpOptions).subscribe((data: any[]) => {
      //showing a success message
      this.toastr.success('Data Saved')
      //redirects to the table
      this.router.navigate(['/modalities']);
    }, error => {
        //shows an error message
        this.toastr.error('Error Status: ' + error.status)
        if (error.status == 401) //if error is 401 the redirects to login
          this.router.navigate(['/login']);
    });
  }
}
