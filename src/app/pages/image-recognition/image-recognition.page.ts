import { AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
declare let ml5: any;

@Component({
  selector: 'app-image-recognition',
  templateUrl: 'image-recognition.page.html'
})
export class ImageRecognitionPage implements OnInit, AfterViewInit {
  public header = 'Image Recognition';
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
  @ViewChild('video') public video: ElementRef;
  @ViewChild('canvas') public canvas: ElementRef;

  constructor(private zone: NgZone, public nav: NavController) {}

  ngOnInit() {
    this.mobileNetFeatureExtractor = ml5.featureExtractor(
      'MobileNet',
      { numClasses: 3, numLabels: 3 },
      () =>
        (this.featureClassifier = this.mobileNetFeatureExtractor.classification(
          this.video.nativeElement,
          () => console.log('Video ready')
        ))
    );
  }
  goBack(){
		this.nav.navigateBack('/tabs/demos');
	}

  async addImage() {
    await this.capture();
    this.featureClassifier.addImage(this.newLabel);
    this.showTrainButton = true;
  }

  train() {
    this.iteration = 0;
    this.loss = 0;
    this.featureClassifier.train(loss => {
      if (
        loss < this.MINIMUM_LOSS ||
        this.iteration === this.TRAIN_ITERATIONS_LIMIT
      ) {
        this.iteration = this.TRAIN_ITERATIONS_LIMIT;
        this.showPredictButton = true;
      } else {
        this.zone.run(() => {
          ++this.iteration;
          this.loss = loss;
        });
      }
    });
  }

  public ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.play();
      });
    }
  }

  public async capture() {
    await this.canvas.nativeElement
      .getContext('2d')
      .drawImage(this.video.nativeElement, 0, 0, 320, 240);
  }

  predict() {
    this.mobileNetFeatureExtractor.classify((err, results) => {
      if (err) {
        return console.error(err);
      }
      this.zone.run(() => {
        this.label = results[0].label;
        this.confidence = results[0].confidence;
        this.results = JSON.stringify(results);
      });
    });
  }
}
