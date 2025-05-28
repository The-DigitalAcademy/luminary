import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { userInfo } from 'os';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private http = inject(HttpClient);
  private apiURL = 'http://localhost:3000/users';

  register(user: User): Observable<User> {
    return this.http.post<User>(this.apiURL, user);
  }

  checkEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiURL}?email=${email}`);
  }
}
export interface User {
  id?: number;
  name: string;
  surname: string;
  email: string;
  password: string;
}