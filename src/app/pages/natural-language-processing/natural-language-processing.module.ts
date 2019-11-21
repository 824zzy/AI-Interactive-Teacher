import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NaturalLanguageProcessingPage } from './natural-language-processing.page';

const routes: Routes = [
  {
    path: '',
    component: NaturalLanguageProcessingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NaturalLanguageProcessingPage]
})
export class NaturalLanguageProcessingPageModule {}
