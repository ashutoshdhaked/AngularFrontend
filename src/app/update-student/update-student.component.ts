import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
})
export class UpdateStudentComponent implements OnInit {

  @Input() student: any; 
  @Output() closeModal = new EventEmitter<void>();

  id :number = 0; 
  name: string = '';
  email: string = '';
  dob: string = '';
  branch: string = '';
  semester: string = '';
  image: File | null = null;

  loading: boolean = false;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    if (this.student) {
      this.id = this.student.id
      this.name = this.student.name || '';
      this.email = this.student.email || '';
      this.dob = this.student.dob || '';
      this.branch = this.student.branch || '';
      this.semester = this.student.semester || '';
    }
  }

  handleImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.image = file;
    }
  }

  submit(): void {
    this.loading = true;
    if (this.email || this.dob || this.name || this.branch || this.semester) {
       const userId = this.id;
      const userName = this.name;
      const email = this.email;
      const dob = this.dob;
      const branch = this.branch;
      const semester = this.semester;
 
      console.log("data is like : "+{ userId , userName, email, dob, branch, semester });
      
      const data = new FormData();
      if (this.image) {
        data.append('file', this.image);
      }
      data.append(
        'user',
        JSON.stringify({ name: userName, email, dob, branch, semester })
      );

      this.studentService.updateStudent(userId,data).subscribe(
        (res) => {
          console.log(res);
          this.loading = false;
          this.closeModal.emit();
        },
        (err) => {
          alert('user is not created !! ' + err);
          this.closeModal.emit();
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
