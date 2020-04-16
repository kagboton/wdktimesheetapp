import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './header/header.component';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { SingleUserComponent } from './user-list/single-user/single-user.component';
import { EditUserComponent } from './user-list/edit-user/edit-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SnackBarService} from './services/snack-bar.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const appRoutes: Routes = [
  {path: 'auth/register', component: SignupComponent},
  {path: 'auth/connexion', component: SigninComponent},
  {path: 'users', component: UserListComponent},
  {path: 'users/edit', component: EditUserComponent},
  {path: 'users/:login', component: SingleUserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    UserListComponent,
    SingleUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
