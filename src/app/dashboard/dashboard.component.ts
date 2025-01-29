import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { StudentService } from '../student.service';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  students$: Observable<any[]> = of([]);
  filteredStudents$: Observable<any[]> = this.dashBoardService.students$;
  isLoading: boolean = true;
  selectedStudent: any = null;
  currentStudent :any = null;


  constructor(private studentService: StudentService,
    private dashBoardService : DashboardService
  ) {}

  ngOnInit(): void {
      this.studentService.getStudents().subscribe((students) => {
        this.dashBoardService.updateStudents(students); 
        this.isLoading = false; 
      });
      this.students$ = this.dashBoardService.students$;
  }

  deleteStudent(id: number): void {
    if (window.confirm('Are you sure you want to delete this item?')) {
      this.studentService.deleteStudent(id).subscribe((res) => {
        this.students$ = this.students$?.pipe(
          map((students) => students.filter((student) => student.id !== res.id))
        );
      });
    } else {
      alert('Ok no action performed !!');
    }
  }
  openUpdateModal(student: any) {
    this.selectedStudent = { ...student };
  }
  closeUpdateModal() {
    this.selectedStudent = null;
  }

  openViewModal(student :any){
    this.currentStudent = { ...student };
  }
  closeViewModal(){
    this.currentStudent = null;
  }



}
