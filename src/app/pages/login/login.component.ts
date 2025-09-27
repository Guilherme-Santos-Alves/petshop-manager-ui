import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { IUser } from './interfaces/IUser';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { IUserData } from './interfaces/IUserData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  textBtn = 'Entrar';
  typeBtn = 'submit';

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  hide = true;

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  login() {
    if (this.loginForm.valid){
      let payload: IUser = this.loginForm.value;

      this.loginService.loginUser(payload).subscribe(
          (response) => {
            this.router.navigateByUrl('/home');
            this.loginService.setUserData(response);
          }, (error) => {
            console.error(error);
          }
      );
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}