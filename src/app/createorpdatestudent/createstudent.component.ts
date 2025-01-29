import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css'],
})
export class CreateStudentComponent implements OnInit {
  name: string = '';
  email: string = '';
  dob: string = '';
  branch: string = '';
  semester: string = '';
  image: File | null = null;

  loading: boolean = false;

  constructor(private studentService: StudentService,
    private router :Router
  ) {}

  ngOnInit(): void {}

  handleImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.image = file;
    }
  }

  submit(): void {
    this.loading = true;
    if (this.email || this.dob || this.name || this.branch || this.semester) {
      const username = this.name;
      const email = this.email;
      const dob = this.dob;
      const branch = this.branch;
      const semester = this.semester;

      const data = new FormData();
      if (this.image) {
        data.append('file', this.image);
      }
      data.append(
        'user',
        JSON.stringify({ name: username, email, dob, branch, semester })
      );

      console.log('image : ' + JSON.stringify(this.image));

      console.log('data like : ' + data);

      this.studentService.createStudent(data).subscribe(
        (res) => {
          this.loading = false;
          alert("user created succefully !!");
          this.resetForm();
          this.router.navigate(['/dashboard']);
        },
        (err) => {
          alert('user is not created !! ' + err);
        }
      );
    }
  }

  resetForm(): void {
    this.name = '';
    this.email = '';
    this.dob = '';
    this.branch = '';
    this.semester = '';
    this.image = null;
  }
}
