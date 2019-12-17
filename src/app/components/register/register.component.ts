import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// const bcrypt = require('bcryptjs');

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string;
  username: string;
  email: string;
  password: string;
  hashedPassword: string;

  constructor(private validateService: ValidateService, public authService: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  //  public onRegisterSubmit() {
  //   bcrypt.genSalt(10, (err, salt) => {
  //     bcrypt.hash(this.password, salt, (ERROR: any, hash: any) => {
  //       if (ERROR) { throw ERROR; }
  //       this.hashedPassword = hash;
  //       const user = {
  //         name: this.name,
  //         username: this.username,
  //         email: this.email,
  //         password: this.hashedPassword
  //       };

  //       // required fields
  //       if (!this.validateService.validateRegister(user)) {
  //     this.toastr.error('All fields are required', 'Error');
  //     this.router.navigate(['/register']);
  //     return false;
  //   }

  //   // validate email
  //       if (!this.validateService.validateEmail(user.email)) {
  //     this.toastr.error('Invalid email address', 'Error');
  //     this.router.navigate(['/register']);
  //     return false;
  //   }

  //   // // register user
  //       this.authService.registerUser(user).subscribe(() => {
  //     this.router.navigate(['']).then(() => {
  //       this.toastr.success('Success', 'User Registered');
  //     });
  //   }, error => {
  //     this.toastr.error('Error', 'Unable to register user');
  //     this.router.navigate(['/register']);
  //     console.log(error);
  //   });
  //     });
  //   });
  // }
}
