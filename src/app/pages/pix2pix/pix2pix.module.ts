import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Pix2pixPage } from './pix2pix.page';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBarModule } from 'angular-progress-bar';
import { ComponentsModule } from '../../components/components.module';
import { DrawableDirective } from '../../directives/drawable.directive';


declare let ml5: any;

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: Pix2pixPage }]),
    ProgressBarModule,
    ComponentsModule
  ],
  declarations: [Pix2pixPage, DrawableDirective]
})
export class Pix2pixPageModule {}
