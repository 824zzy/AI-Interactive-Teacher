import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.page.html',
  styleUrls: ['./demos.page.scss'],
})
export class DemosPage {
  demos = [
    {
      name: 'Image Recognition',
      detail: 'Detect multiple objects within an image, with bounding boxes. Recognize 80 different classes of objects.',
      url: 'image-recognition',
      picture: 'assets/icon/image-recognition.png'
    },
    {
      name: 'Image Classification',
      detail: 'Use a pre-trained and optimized model to identify hundreds of classes of objects, including people, activities, animals, plants, and places.',
      url: 'image-classifier',
      picture: 'assets/icon/image-classification.png'
    },
    {
      name: 'Handwriting Recognition',
      detail: 'Handwritten digits are images in the form of 28*28 gray scale intensities of images representing an image along with the first column to be a label (0 to 9) for every image.',
      url: 'predict-number',
      picture: 'assets/icon/handwriting-recognition.jpeg'
    },
    {
      name: 'Video Classification',
      detail: 'videos are a collection of a set of images arranged in a specific order. These sets of images are also referred to as frames',
      url: 'video-classifier',
      picture: 'assets/icon/video-classification.png'
    },
  ]
  constructor(
    public actionSheetCtrl: ActionSheetController,
    // public inAppBrowser: InAppBrowser,
    public router: Router
  ) { 
  }
  
  // TODO: change url
  // goToDemoUrl(demo: any) {
  //   this.inAppBrowser.create(
  //     `https://twitter.com/${demo.url}`,
  //     '_blank'
  //   );
  // }

}
