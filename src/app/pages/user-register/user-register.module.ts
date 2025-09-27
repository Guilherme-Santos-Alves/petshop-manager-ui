import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register.component';
import { HeaderModule } from 'src/app/features/header/header.module';
import { UserRegisterRoutingModule } from './user-register-routing.module';
import { MatInputModule } from '@angular/material/input';
import { PsBtnPrimaryModule } from 'src/app/shared/components/ps-btn-primary/ps-btn-primary.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    UserRegisterRoutingModule,
    MatInputModule,
    PsBtnPrimaryModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule
  ]
})
export class UserRegisterModule { }
