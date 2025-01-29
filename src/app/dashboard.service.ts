import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private studentsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  students$: Observable<any[]> = this.studentsSubject.asObservable();

  constructor() {}

  updateStudents(students: any[]): void {
    this.studentsSubject.next(students);
  }
}
