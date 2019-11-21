import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PredictNumberPage } from './predict-number.page';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DrawableDirective } from '../../directives/drawable.directive';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: PredictNumberPage }]),
    ComponentsModule
  ],
  declarations: [PredictNumberPage, DrawableDirective]
})
export class PredictNumberModule {}
