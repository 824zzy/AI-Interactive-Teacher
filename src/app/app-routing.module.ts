import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', 
    loadChildren: () => import('./pages/login/login.module').then(m=>m.LoginPageModule) 
  },
  { path: 'signup', 
    loadChildren: () => import('./pages/signup/signup.module').then(m=>m.SignupPageModule)
  },
  { path: 'image-recognition', 
    loadChildren: () => import('./pages/image-recognition/image-recognition.module').then(m=>m.ImageRecognitionPageModule)
  },
  { path: 'image-classifier', 
    loadChildren: () => import('./pages/image-classifier/image-classifier.module').then(m=>m.ImageClassifierPageModule)
  },
  { path: 'predict-number', 
    loadChildren: () => import('./pages/predict-number/predict-number.module').then(m=>m.PredictNumberModule)
  },
  { path: 'video-classifier', 
    loadChildren: () => import('./pages/video-classifier/video-classifier.module').then(m=>m.VideoClassifierPageModule)
  },
  { path: 'pix2pix', 
    loadChildren: () => import('./pages/pix2pix/pix2pix.module').then(m=>m.Pix2pixPageModule)
  },
  { path: 'computer-vision',
    loadChildren: () => import('./pages/computer-vision/computer-vision.module').then(m=>m.ComputerVisionPageModule)
  },
  { path: 'natural-language-processing', 
    loadChildren: () => import('./pages/natural-language-processing/natural-language-processing.module').then(m=>m.NaturalLanguageProcessingPageModule)
  },
  { path: 'about', 
    loadChildren: () => import('./pages/about/about.module').then(m=>m.AboutPageModule) },
  { path: 'tutorial-filter', loadChildren: './pages/tutorial-filter/tutorial-filter.module#TutorialFilterPageModule' },
  { path: 'tutorial-detail', loadChildren: './pages/tutorial-detail/tutorial-detail.module#TutorialDetailPageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
