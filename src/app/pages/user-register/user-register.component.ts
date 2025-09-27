import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/services/login.service';
import { IUserData } from '../login/interfaces/IUserData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) { }

  userData: IUserData | undefined;
  isAdmin: boolean | undefined;

  ngOnInit(): void {
    this.userData = this.loginService.getUserData();

    const userIsAdmin = this.userData?.role === 'ADMIN';
    this.isAdmin = userIsAdmin;
  }

  userRegisterForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.required]],
    cpf: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required]],
    crmv: [''], // n required
    role: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  register() {
    console.log(this.userRegisterForm.status);
    console.log(this.userRegisterForm);
    if(this.userRegisterForm.valid){
      let payload: any = this.userRegisterForm.value;

      this.registerService.registerUser(payload).subscribe(
          (response) => {
            console.log(response);
          }, (error) => {
            console.error(error);
          }
      );
    } else {
      this.userRegisterForm.markAllAsTouched();
    }
  }

}