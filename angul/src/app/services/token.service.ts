import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  authToken: any;

  getTokenHeader() {
    if (!this.authToken)
      this.loadToken();

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });
  }

  loadToken() {
    this.authToken = localStorage.getItem('token');
  }
  constructor() { }
}
