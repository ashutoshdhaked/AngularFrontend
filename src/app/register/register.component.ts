import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private adminService: AdminService,
    private router : Router
  ) {}

  ngOnInit(): void {}

  fullname: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit() {
    if (this.password === this.confirmPassword) {
      const email = this.email;
      const password = this.password;
      const fullname = this.fullname;
      this.adminService.registerAdmin({ fullname, email, password }).subscribe(
        (response) => {
           if(response.status !== 500){
            this.router.navigate(['/login']);
           }
           else{
            alert(" Error : User is not created !!")
           }
        },
        (error) => {
          alert(" Error : User is not created !!"+error)
        }
      );
    } else {
      alert('Passwords do not match');
    }
  }
}
