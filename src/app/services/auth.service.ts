import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, private http: HttpClient) { }
  authToken: any;
  user: any;
  username: any;
  userId: any;

  registerUser(user) {
    return this.http.post('https://tetqc1kgx7.execute-api.eu-west-2.amazonaws.com/prod/swellusers', user);
  }

  getUserByUsername(username) {
    return this.http.get(`https://tetqc1kgx7.execute-api.eu-west-2.amazonaws.com/prod/swellusers/user?username=${username}`);
  }

  comparePassword(candidatePw, userPw) {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`https://tetqc1kgx7.execute-api.eu-west-2.amazonaws.com/prod/swellusers?candidatePw=${candidatePw}&userPw=${userPw}`);
  }

  getProfile() {
    this.loadToken();
    const headers = new  HttpHeaders({
      Authorization: this.authToken,
      'Content-Type': 'application/json'
    });
    return this.http.get('users/profile', {headers});
  }

  // getProfile() {
  //   this.loadToken();
  //   return this.http.get('users/profile');
  // }

  storeUserData(token, user, id) {
    this.localStorage.setItem('id_token', token);
    this.localStorage.setItem('user', user);
    this.localStorage.setItem('id', id);
    this.authToken = token;
    this.user = user;
    this.userId = id;
  }

  // comparePassword(candidatePassword, hash, callback) {
  //   bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
  //     // if (err) throw err;
  //     console.log(isMatch);
  //     callback(null, isMatch);
  //   });
  // }

  loadToken() {
    const token = this.localStorage.getItem('id_token');
    this.authToken = token;
  }

  loadUsername() {
    const username = this.localStorage.getItem('user');
    this.username = username;
  }

  isTokenExpired() {
    const isExpired = helper.isTokenExpired(this.localStorage.id_token);
    return isExpired;
  }

  public logout() {
    this.authToken = null;
    this.user = null;
    this.localStorage.clear();
  }
}
