import { Component, OnInit } from '@angular/core';
import { faDog, faUserDoctor, faUser, faDoorOpen, faHouse } from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  ngOnInit(): void {
  }

}