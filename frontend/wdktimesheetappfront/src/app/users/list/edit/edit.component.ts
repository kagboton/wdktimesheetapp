import {Component, OnInit} from '@angular/core';
import {CreateComponent} from '../create/create.component';
import {UserInterface} from '../../models/user.interface';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-edit-user',
  templateUrl: '../create/create.component.html',
  styleUrls: ['../create/create.component.scss']
})
export class EditComponent extends CreateComponent implements OnInit {
  title = 'Edition of user';
  user: UserInterface;

  ngOnInit(): void {
    this.route.data
      .pipe(take(1))
      .subscribe((data: {user: UserInterface}) => {
      if (!!data.user) {
        this.user = data.user;
        this.form.patchValue(data.user);
      }
    });
  }

  onSubmit() {
    this.userService.put(this.user.login, this.form.value)
      .pipe(take(1))
      .subscribe((user: UserInterface) => {
        this.router.navigate(['/users']);
        this.snackBarService.addMessage('Your data has been updated');
      });
  }
}
