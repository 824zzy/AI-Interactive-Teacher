import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

import { IonicModule } from '@ionic/angular';

import { VideoClassifierPage } from './video-classifier.page';


declare let ml5: any;

const routes: Routes = [
  {
    path: '',
    component: VideoClassifierPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [VideoClassifierPage]
})
export class VideoClassifierPageModule {}
