import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  students$: Observable<any> | null = null; 
  isLoading : boolean = true;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.students$ = this.studentService.getStudents();
    this.isLoading = false;
  }
}
