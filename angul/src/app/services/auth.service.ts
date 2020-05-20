import {Injectable} from '@angular/core';
import {map} from "rxjs/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient,
              private tokenService: TokenService) {
  }

  loginUser(credential) {
    console.log(credential);
    return this.http.post('http://localhost:3000/users/authenticate', credential, {headers: this.headers})
      .pipe(map(value => {
        console.log(value);
        return value as any;
      }));
  }

  registerUser(user) {
    return this.http.post('http://localhost:3000/users/register', user, {headers: this.headers})
      .pipe(map(res => {
        return res as any;
      }));
  }

  getProfile() {
    return this.http.get('http://localhost:3000/users/profile', {headers: this.tokenService.getTokenHeader()})
      .pipe(map(value => {
        return value as any;
      }));
  }

  storeUserData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('login', JSON.stringify(user.login));
    this.authToken = token;
    this.user = user;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
