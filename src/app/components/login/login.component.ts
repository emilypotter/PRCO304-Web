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

    this.authService.getUserByUsername(this.username).subscribe((userData: any) => {
      if (userData) {
        this.authService.comparePassword(this.password, userData[0].password).subscribe((res: any) => {
          if (res.success) {
            this.authService.storeUserData(res.token, userData[0].username, userData[0]._id);
            this.router.navigate(['']).then(() => {
            this.toastr.success('Logged in', 'Success');
            });
          } else {
            this.toastr.error('Incorrect email or password', 'Error');
          }
        });
      } else {
        console.log('unable to get user');
      }
    });
  }

}
