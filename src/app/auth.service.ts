import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private booleanSubject = new BehaviorSubject<boolean>(false);
  boolean$ = this.booleanSubject.asObservable();
  constructor() {}

  updateBoolean(value: boolean) {
    this.booleanSubject.next(value);
  }
}
