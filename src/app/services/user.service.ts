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

  register(user: any): Observable<any> {
    return this.http.post<any>(this.apiURL, user);
  }

  checkEmail(email: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}?email=${email}`);
  }
}
