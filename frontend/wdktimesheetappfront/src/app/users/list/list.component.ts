import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {UserInterface} from '../models/user.interface';
import {Router} from '@angular/router';
import {SnackBarService} from '../../core/services/snack-bar.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: UserInterface[];

  constructor(
    private userService: UserService,
    private snackBarService: SnackBarService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.userService.list().subscribe(users => {
      this.users = users;
    });
  }

  onEdit(login) {
    this.router.navigate(['users/edit/' + login]);
  }

  onDelete(user) {
    this.userService.delete(user.login).pipe(take(1)).subscribe(
      () => {
        this.users = this.users.filter(item => {
          return item.login !== user.login;
        });
        this.snackBarService.addMessage('The user has been successfully deleted');
      }
    );
  }
}
