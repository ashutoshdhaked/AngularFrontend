import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private booleanSubject = new BehaviorSubject<boolean>(false);
  boolean$ = this.booleanSubject.asObservable();
  isAuthenticated = false;
  constructor(
    private adminService : AdminService
  ) {}

  updateBoolean(value: boolean) {
     this.booleanSubject.next(value);
     this.isAuthenticated = value;
  }
  
  checkIfLoggedIn() {
    return !!localStorage.getItem("token")
  }
}
