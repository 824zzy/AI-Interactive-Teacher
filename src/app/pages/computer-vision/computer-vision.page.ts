import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { TutorialFilterPage } from '../tutorial-filter/tutorial-filter.page';
import { TutorialData } from '../../providers/tutorial-data';
import { UserData } from '../../providers/user-data';

@Component({
  selector: 'app-computer-vision',
  templateUrl: './computer-vision.page.html',
  styleUrls: ['./computer-vision.page.scss'],
})
export class ComputerVisionPage{
  // @ViewChild('scheduleList', { static: true }) scheduleList: IonList;
  @ViewChild('TutorialList') tutorialList: IonList;
  queryText = ''
  segment = 'all'
  pubDate: String

  constructor(
    public alertCtrl: AlertController,
    public tutorialData: TutorialData,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public toastCtrl: ToastController,
    public user: UserData
  ) { }

  ngOnInit() {
    this.updateTutorial();
  }

  updateTutorial(){
    if (this.tutorialList) {
      this.tutorialList.closeSlidingItems() // TODO:
    }
  }


}