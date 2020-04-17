import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CreateComponent} from './users/list/create/create.component';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './core/header/header.component';
import {UserService} from './users/service/user.service';
import {AuthGuardService} from './core/services/auth-guard.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './users/list/list.component';
import {EditComponent} from './users/list/edit/edit.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {EditResolver} from './users/list/edit/edit.resolver';
import {MatCardModule} from '@angular/material/card';

const appRoutes: Routes = [
  {
    path: 'register',
    component: CreateComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    component: ListComponent,
  },
  {
    path: 'users/edit/:login',
    component: EditComponent,
    resolve: {
      user: EditResolver
    }
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    LoginComponent,
    HeaderComponent,
    ListComponent,
    EditComponent
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
        MatSnackBarModule,
        MatListModule,
        MatTooltipModule,
        MatCardModule
    ],
  providers: [
    UserService,
    AuthGuardService,
    EditResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
