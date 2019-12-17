import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// const jwt = require('jsonwebtoken');
import * as jwt from 'jsonwebtoken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    // this.authService.authenticateUser(user).subscribe((data: any) => {
    //     if (data.success) {
    //       this.authService.storeUserData(data.token, data.user);
    //       this.toastr.success('Successfully Logged In', 'Success');
    //       this.router.navigate(['']);
    //     } else {
    //       this.toastr.error('Unable To Login', 'Error');
    //       this.router.navigate(['login']);
    //     }
    // });

    this.authService.getUserByUsername(this.username).subscribe((userData: any) => {
      if (userData) {
        console.log('success');
        this.authService.comparePassword(this.password, userData[0].password).subscribe((res: any) => {
          this.authService.storeUserData(res.token, userData[0].username);
          this.router.navigate(['']).then(() => {
            this.toastr.success('Success', 'Logged in');
          });
        });
      } else {
        console.log('unable to get user');
      }
    });
  }

}
