import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {UserInterface} from '../../models/user.interface';
import {SnackBarService} from '../../../core/services/snack-bar.service';
import {ActivatedRoute, Router} from '@angular/router';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  form: FormGroup;
  title = 'Create an account';

  constructor(
    protected userService: UserService,
    protected snackBarService: SnackBarService,
    protected formBuilder: FormBuilder,
    protected router: Router,
    protected route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      login:  ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)])]
    });
  }

  onSubmit() {
    this.userService.post(this.form.value).pipe(take(1)).subscribe(
      (user: UserInterface) => {
        this.router.navigate(['/users']);
        this.snackBarService.addMessage('Your account has been created with the login "' + user.login + '"');
      },
      error => this.snackBarService.addMessage('Oups ! A server error occured !')
    );
  }

}
