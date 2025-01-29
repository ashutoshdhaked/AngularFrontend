import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  searchKey: string = '';
  searchText: string = '';

  constructor(
    private studentService: StudentService,
    private dashBoardService: DashboardService
  ) {}

  ngOnInit(): void {}

  onSearch() {
    this.studentService
      .filterStudent(this.searchKey, this.searchText)
      .subscribe(
        (response) => {
          this.dashBoardService.updateStudents(response);
        },
        (error) => {
          alert('Sorry data is not filtered !!'+error);
        }
      );
  }
}
