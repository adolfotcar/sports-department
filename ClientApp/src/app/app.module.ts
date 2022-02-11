import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TeacherTableComponent } from './teacher/table/table.component';
import { TeacherCreateComponent } from './teacher/create/create.component';
import { TeacherEditComponent } from './teacher/edit/edit.component';
import { NeighborhoodTableComponent } from './neighborhood/table/table.component';
import { NeighborhoodCreateComponent } from './neighborhood/create/create.component';
import { NeighborhoodEditComponent } from './neighborhood/edit/edit.component';
import { ModalityTableComponent } from './modality/table/table.component';
import { ModalityCreateComponent } from './modality/create/create.component';
import { ModalityEditComponent } from './modality/edit/edit.component';
import { StudentTableComponent } from './student/table/table.component';
import { StudentCreateComponent } from './student/create/create.component';
import { StudentEditComponent } from './student/edit/edit.component';
import { UserTableComponent } from './user/table/table.component';
import { UserCreateComponent } from './user/create/create.component';
import { UserEditComponent } from './user/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    TeacherTableComponent,
    TeacherCreateComponent,
    TeacherEditComponent,
    NeighborhoodTableComponent,
    NeighborhoodCreateComponent,
    NeighborhoodEditComponent,
    ModalityTableComponent,
    ModalityCreateComponent,
    ModalityEditComponent,
    StudentTableComponent,
    StudentCreateComponent,
    StudentEditComponent,
    UserTableComponent,
    UserCreateComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'teachers', component: TeacherTableComponent },
      { path: 'teachers/create', component: TeacherCreateComponent },
      { path: 'teachers/:ID', component: TeacherEditComponent },
      { path: 'neighborhoods', component: NeighborhoodTableComponent },
      { path: 'neighborhoods/create', component: NeighborhoodCreateComponent },
      { path: 'neighborhoods/:ID', component: NeighborhoodEditComponent },
      { path: 'modalities', component: ModalityTableComponent },
      { path: 'modalities/create', component: ModalityCreateComponent },
      { path: 'modalities/:ID', component: ModalityEditComponent },
      { path: 'students', component: StudentTableComponent },
      { path: 'students/create', component: StudentCreateComponent },
      { path: 'students/:ID', component: StudentEditComponent },
      { path: 'users', component: UserTableComponent },
      { path: 'users/create', component: UserCreateComponent },
      { path: 'users/:ID', component: UserEditComponent },
    ]),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
