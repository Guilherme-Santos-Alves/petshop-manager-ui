import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/services/login.service';
import { IUserData } from '../login/interfaces/IUserData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userData: IUserData | undefined;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.userData = this.loginService.getUserData();
    console.log(this.userData);
  }

}