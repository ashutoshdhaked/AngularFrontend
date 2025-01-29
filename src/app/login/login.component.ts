import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private adminService: AdminService,
    private router: Router,
    // private authService : AuthService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.email && this.password) {
      const email = this.email;
      const password = this.password;
      this.adminService.loginAdmin({ email, password }).subscribe(
        (response) => {
          localStorage.setItem("token",response.token);
          // this.authService.updateBoolean(true);
          this.router.navigate(['/dashboard']); 
        },
        (error) => {
         alert('Error User Not Logged In !!');
        }
      );
    } else {
      alert('Error User Not Logged In !!');
    }
  }
}
