import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private loginUrl = 'http://localhost:3000/admin/signin';
  private registerUrl = 'http://localhost:3000/admin/register';

  constructor(private http: HttpClient) {}

  loginAdmin(data: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(this.loginUrl, data).pipe(
      tap((response) => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  registerAdmin(data: { fullname: string, email: string; password: string }):Observable<any>{
     return this.http.post(this.registerUrl, data);
  }
}
