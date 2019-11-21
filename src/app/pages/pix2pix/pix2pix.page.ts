import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DrawableDirective } from '../../directives/drawable.directive';

import * as tf from '@tensorflow/tfjs';

declare let ml5: any;

interface IPrediction {
  label: string;
  confidence: number;
}

const pathToModel = '/assets/edges2cats_AtoB.pict';

@Component({
  selector: 'app-pix2pix',
  templateUrl: './pix2pix.page.html'
})
export class Pix2pixPage implements OnInit {
  public header = 'Pix2Pix';
  public mobileNetFeatureExtractor;
  public featureClassifier;
  public label;
  public confidence;
  public newLabel;
  public loss: number;
  public iteration = 0;
  public results: string;
  private TRAIN_ITERATIONS_LIMIT = 100;
  private MINIMUM_LOSS = 0.01;
  public showTrainButton = false;
  public showPredictButton = false;
  public loading: boolean;
  predictions: Array<IPrediction>;
  @ViewChild('video') public video: ElementRef;
  // @ViewChild('canvas') public canvas: ElementRef;

  @Input() classifier;
  @ViewChild(DrawableDirective) canvas;

  constructor() {}

  async ngOnInit() {
    this.loading = true;
    this.classifier = await ml5.pix2pix(pathToModel);
    this.loading = false;
  }

  private pixelsToShape(imageData) {
    let img = tf.browser.fromPixels(imageData, 1);
    // @ts-ignore
    img = img.reshape([1, 28, 28, 1]);
    console.log('bbb');
    return tf.cast(img, 'float32');
  }

  async predict(imageData: any) {
    await tf.tidy(() => {
      const img = this.pixelsToShape(imageData);
      console.log(typeof imageData);
      console.log(typeof img);
      this.classifier.transfer(img, (err, result) => {
        console.log('eeee');
        console.log(result);
      });
    });
    // const img = this.pixelsToShape(imageData);
    // console.log(img);
    // this.predictions = await this.classifier.transfer(img, (err, result) => {
    //   console.log('eeee');
    //   console.log(result);
    // });
  }

  clear() {
    this.canvas.clear();
  }
}
