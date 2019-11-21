import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

declare let ml5: any;

interface IPrediction {
  label: string;
  confidence: number;
}

@Component({
  selector: 'app-image-classifier',
  templateUrl: 'image-classifier.page.html',
  styleUrls: ['image-classifier.page.scss']
})
export class ImageClassifierPage implements OnInit {
  public header = 'Image Classifier';
  private MODEL = 'MobileNet';
  private IMAGE_SIZE = 224;
  imageSrc: string | ArrayBuffer;
  predictions: Array<IPrediction>;
  loading: boolean;

  @Input() classifier;
  @Input() image;

  constructor(public nav: NavController) {}
  goBack(){
		this.nav.navigateBack('/tabs/demos');
	}

  async ngOnInit() {
    this.loading = true;
    this.classifier = await ml5.imageClassifier(this.MODEL);
    this.loading = false;
  }

  async predict(img) {
    this.predictions = await this.classifier.predict(img);
  }

  readURL(e: Event): void {
    const files: FileList = (e.target as HTMLInputElement).files;

    if (files && files[0]) {
      const file = files[0] as any;

      file.width = this.IMAGE_SIZE;
      file.height = this.IMAGE_SIZE;

      const reader = new FileReader();
      reader.onload = () => (this.imageSrc = reader.result);

      reader.readAsDataURL(file);
    }
  }
}
