import { Component, OnInit } from '@angular/core';
import { faDog, faUserDoctor, faUser, faDoorOpen, faHouse } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/pages/login/services/login.service';

@Component({
  selector: 'ps-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faDog = faDog;
  faUserDoctor = faUserDoctor;
  faUser = faUser;
  faDoorOpen = faDoorOpen;
  faHouse = faHouse;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  sair() {
    this.loginService.sair();
  }

}