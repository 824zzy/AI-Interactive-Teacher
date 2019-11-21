import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import { LoginPageRoutingModule } from './login-routing.module';

// const routes: Routes = [
//   {
//     path: '',
//     component: LoginPage
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // RouterModule.forChild(routes)
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
