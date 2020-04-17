import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {UserInterface} from '../../models/user.interface';
import {Observable} from 'rxjs';
import {UserService} from '../../service/user.service';
import {map} from 'rxjs/operators';

@Injectable()
export class EditResolver implements Resolve<UserInterface> {
  constructor(private userService: UserService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserInterface> {
    const login: string = route.paramMap.get('login');

    return this.userService.get(login) .pipe(
        map(object => {
          if (object) {
            return object;
          } else {
            this.router.navigate(['../']);
            return null;
          }
        })
      );
  }
}
