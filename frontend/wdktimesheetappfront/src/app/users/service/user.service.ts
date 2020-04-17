import {Injectable} from '@angular/core';
import {UserInterface} from '../models/user.interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  path = 'http://localhost:9090/users';

  post(data) {
    return this.httpClient.post<UserInterface>(this.path, data);
  }

  list() {
    return this.httpClient.get<UserInterface[]>(this.path);
  }


  get(login: string) {
    return this.httpClient.get<UserInterface>(this.path + '/' + login);
  }


  put(login: string, data) {
    return this.httpClient.put<UserInterface>(this.path + '/update/' + login, data);
  }

  delete(login: string) {
    return this.httpClient.delete<any>(this.path + '/' + login);
  }
}
