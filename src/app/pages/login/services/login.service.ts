import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }

  loginUser(payload: IUser) {
    return this.http.post(`http://localhost:8080/auth/login`, payload);
  }

  setUserData(userData: string) {
    localStorage.setItem('userData', userData);
  }

  getUserData() {
    return JSON.parse(localStorage.getItem('userData') || '');
  }

  sair() {
    localStorage.removeItem('userData');
    this.router.navigateByUrl("/''");
  }
}