import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { User } from "../pages/register/user";
import { Router } from "@angular/router";
import { Observable } from "rxjs";




@Injectable({
  providedIn: 'root',
})
export class UserService {


  private http = inject(HttpClient);
  private apiURL = 'http://localhost:3000/users';


  currentUser = signal<User | null>(null);

  constructor(private router: Router) {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      this.currentUser.set(JSON.parse(currentUser));
    }
  }
  register(user: User): Observable<any> {
    return this.http.post<any>(this.apiURL, user);
  }


 checkEmail(email: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}?email=${email}`);
 }

 login(user: any) {
    this.currentUser.set(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.router.navigate(['/home']);
 }

   logout() {
    this.currentUser.set(null);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }
}
