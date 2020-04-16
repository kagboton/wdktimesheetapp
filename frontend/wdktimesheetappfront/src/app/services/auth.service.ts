import { Injectable } from '@angular/core';
import {UserInterface} from '../models/user.interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:9090/Users';

  /*createNewUser(user: UserInterface) {

    const formData = new FormData();
    formData.append('login', user.login);
    formData.append('firstname', user.firstname);
    formData.append('lastName', user.lastname);
    formData.append('email', user.email);
    formData.append('password', user.password);

    return this.httpClient.post<UserInterface>(url, user)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        },
      );

  }*/

  post(data) {
    return this.httpClient.post<UserInterface>(this.url, data);
  }

}
