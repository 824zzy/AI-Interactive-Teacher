import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageClassifierPage } from './image-classifier.page';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../../components/components.module';

declare let ml5: any;

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: ImageClassifierPage }]),
    ComponentsModule
  ],
  declarations: [ImageClassifierPage]
})
export class ImageClassifierPageModule {}
