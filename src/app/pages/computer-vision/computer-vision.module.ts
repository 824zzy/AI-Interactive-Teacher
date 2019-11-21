import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComputerVisionPage } from './computer-vision.page';

const routes: Routes = [
  {
    path: '',
    component: ComputerVisionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComputerVisionPage]
})
export class ComputerVisionPageModule {}
