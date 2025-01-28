import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit() {
    if (this.password === this.confirmPassword) {
      // Handle form submission here, e.g., send to API
      console.log('Form Submitted', this.fullName, this.email, this.password);
    } else {
      alert('Passwords do not match');
    }
  }
}
