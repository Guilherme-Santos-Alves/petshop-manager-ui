import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register.component';
import { HeaderModule } from 'src/app/features/header/header.module';
import { UserRegisterRoutingModule } from './user-register-routing.module';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    UserRegisterRoutingModule,
    MatInputModule
  ]
})
export class UserRegisterModule { }
