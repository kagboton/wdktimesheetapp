import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {UserInterface} from '../../models/user.interface';
import {equal} from 'assert';
import {SnackBarService} from '../../services/snack-bar.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  form: FormGroup;

  constructor(private authService: AuthService,
              private snackBarService: SnackBarService,
              private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      login:  ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)])]
    });
  }

  onSubmit() {
    this.authService.post(this.form.value).subscribe(
      (user: UserInterface) => {
        this.snackBarService.addMessage('Your account has been created with the login "' + user.login + '"');
      },
      error => this.snackBarService.addMessage('Oups ! A server error occured !')
    );
  }

}
