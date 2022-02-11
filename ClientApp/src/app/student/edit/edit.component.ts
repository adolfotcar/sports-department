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
export class StudentEditComponent {
  /** create ctor */

  data: any;
  token: any;
  httpOptions: object;
  modalities: any;
  neighborhoods: any;
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
    http.get(baseUrl + 'api/students/' + this.mainId, this.httpOptions).subscribe(result => {
      this.MyForm.controls["ID"].setValue(result["modalityId"]);
      this.MyForm.controls["Name"].setValue(result["name"]);
      this.MyForm.controls["Surname"].setValue(result["surname"]);
      this.MyForm.controls["ModalityId"].setValue(result["modalityId"]);
      this.MyForm.controls["NeighborhoodId"].setValue(result["neighborhoodId"]);
    }, error => {
      //shows an error message
      this.toastr.error('Error Status: ' + error.status);
      if (error.status == 401)//if error is 401 the redirects to login
        this.router.navigate(['/login']);
    });

    this.getModalities();
    this.getNeighborhoods();
  }

  getModalities() {
    //load the modalities that will be used in the dropdown
    this.http.get('/api/modalities', this.httpOptions).subscribe(result => {
      this.modalities = result;
    }, error => {
        //shows an error message
        this.toastr.error('Error Status: ' + error.status)
        if (error.status == 401)//if error is 401 the redirects to login
          this.router.navigate(['/login']);
    });
  }

  getNeighborhoods() {
    //load the neighborhoods that will be used in the dropdown
    this.http.get('/api/neighborhoods', this.httpOptions).subscribe(result => {
      this.neighborhoods = result;
    }, error => {
        //shows an error message
        this.toastr.error('Error Status: ' + error.status)
        if (error.status == 401)//if error is 401 the redirects to login
          this.router.navigate(['/login']);
    });
  }

  ngOnInit(): void {

    this.MyForm = new FormGroup({
      ID: new FormControl(null),
      Name: new FormControl("", [Validators.required]),
      Surname: new FormControl("", [Validators.required]),
      ModalityId: new FormControl("", [Validators.required]),
      NeighborhoodId: new FormControl("", [Validators.required])
    });
  }

  Save() {
    this.submitted = true;

    if (this.MyForm.invalid) {
      return;//if any field is missing/invalid values then stops action
    }

    //creating the JSON object with the form fields
    var data = { studentId: this.mainId, Name: this.MyForm.value.Name, Surname: this.MyForm.value.Surname, modalityId: this.MyForm.value.ModalityId, neighborhoodId: this.MyForm.value.NeighborhoodId };
    var jData = JSON.stringify(data);
    this.http.put('api/students/' + this.mainId, jData, this.httpOptions).subscribe((data: any[]) => {
      //showing a success message
      this.toastr.success('Data Saved');
      //redirects to the table
      this.router.navigate(['/students']);
    }, error => {
        //shows an error message
        this.toastr.error('Error Status: ' + error.status)
        if (error.status == 401)//if error is 401 the redirects to login
          this.router.navigate(['/login']);
    });
  }
}
