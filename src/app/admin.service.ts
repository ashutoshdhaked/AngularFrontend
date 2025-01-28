import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private loginUrl = 'http://localhost:3000/admin/signin';
  private registerUrl = 'http://localhost:3000/admin/register';

  constructor(private http: HttpClient) {}

  loginAdmin(data: any) {
      this.http.post(this.loginUrl, data);
  }

  registerAdmin(data: any) {
    this.http.post(this.registerUrl, data);
  }
}
