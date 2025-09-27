import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';
import { Router } from '@angular/router';
import { IUserData } from '../interfaces/IUserData';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userData: any; 

  constructor(private http: HttpClient, private router: Router) {}

  loginUser(payload: IUser) {
    return this.http.post<IUserData>(`http://localhost:8080/auth/login`, payload);
  }

  setUserData(userData: IUserData) {
    this.userData = userData;
  }

  getUserData() {
    return this.userData;
  }

  getUserId(){
    return this.userData?.id ?? null;
  }

  getToken(){
    return this.userData?.token ?? null;
  }

  getRole(){
    return this.userData?.role ?? null;
  }

  sair(): void {
    this.userData = null;
    this.router.navigateByUrl('/');
  }
}