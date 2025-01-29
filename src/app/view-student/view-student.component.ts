import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css'],
})
export class ViewStudentComponent implements OnInit {
  @Input() student: any;
  @Output() closeModal = new EventEmitter<void>();
  constructor() {}
  ngOnInit(): void {
    if (!this.student) {
      console.error('Student data is missing or not provided.');
    }
  }

}
