import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { NavController } from '@ionic/angular'

declare let ml5: any;

@Component({
  selector: 'app-video-classifier',
  templateUrl: 'video-classifier.page.html',
  styleUrls: ['video-classifier.page.scss']
})
export class VideoClassifierPage implements OnInit, AfterViewInit {
  header = 'Video Classifier';
  loading: boolean;
  results: Array<{ label: string; confidence: number }>;
  result: string;
  probability: string;
  private INTERVAL = 5000;
  @ViewChild('video') public video: ElementRef;

  constructor(public nav: NavController) {}
  goBack(){
		this.nav.navigateBack('/tabs/demos');
	}

  async ngOnInit() {
    this.loading = true;
    const classifier = await ml5.imageClassifier('MobileNet');
    this.loading = false;

    this.video.nativeElement.play();

    setInterval(() => {
      this.classify(classifier);
    }, this.INTERVAL);
  }

  async classify(classifier) {
    this.results = await classifier.classify(this.video.nativeElement);

    this.result = this.results[0].label;
    this.probability = this.results[0].confidence.toFixed(4);
  }

  public async ngAfterViewInit() {
    if (navigator.mediaDevices && !navigator.mediaDevices.getUserMedia) {
      return;
    }

    this.video.nativeElement.srcObject = await navigator.mediaDevices.getUserMedia(
      {
        video: true
      }
    );
  }
}
