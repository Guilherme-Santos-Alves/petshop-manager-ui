import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  textBtn = 'Castanha';
  typeBtn = 'submit';

  constructor() { }

  ngOnInit(): void {
  }

  hide = true;

}
