import { Component, OnInit, ViewChild } from "@angular/core";
import {
  AlertController,
  IonList,
  LoadingController,
  ModalController,
  ToastController
} from "@ionic/angular";
import { UserData } from "../providers/user-data";
import { TutorialData } from "../providers/tutorial-data";
import { Router } from "@angular/router";
import { TutorialFilterPage } from "../pages/tutorial-filter/tutorial-filter.page";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

@Component({
  selector: "app-tutorials",
  templateUrl: "./tutorials.page.html",
  styleUrls: ["./tutorials.page.scss"],
  providers: [InAppBrowser]
})
export class TutorialsPage implements OnInit {
  // @ViewChild('scheduleList', { static: true }) scheduleList: IonList;
  @ViewChild("tutorialList", {}) tutorialList: IonList;

  category = 0;
  queryText = "";
  segment = "all";
  excludeTracks: any = [];
  shownTutorials: any = [];
  groups: any = [];
  confDate: string;

  constructor(
    public alertCtrl: AlertController,
    public tutorialData: TutorialData,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public toastCtrl: ToastController,
    public user: UserData,
    public iab: InAppBrowser
  ) {}

  //route function to app browser
  tutorialClick(tracks) {
    const browser = this.iab.create(tracks, "_blank", "toolbar=no,location=no");
    browser.show();
  }

  ngOnInit() {
    this.updateTutorial();
  }
  // dayIndex(0)=category
  updateTutorial() {
    if (this.tutorialList) {
      this.tutorialList.closeSlidingItems();
    }
    this.tutorialData
      .getTCategory(
        this.category,
        this.queryText,
        this.excludeTracks,
        this.segment
      )
      .subscribe((data: any) => {
        this.shownTutorials = data.shownTutorials;
        this.groups = data.groups;
      });
  }

  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: TutorialFilterPage,
      componentProps: { excludedTracks: this.excludeTracks }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.excludeTracks = data;
      this.updateTutorial();
    }
  }

  async addFavorite(slidingItem: HTMLIonItemSlidingElement, sessionData: any) {
    if (this.user.hasFavorite(sessionData.name)) {
      // woops, they already favorited it! What shall we do!?
      // prompt them to remove it
      this.removeFavorite(slidingItem, sessionData, "Favorite already added");
    } else {
      // remember this session as a user favorite
      this.user.addFavorite(sessionData.name);

      // create an alert instance
      const alert = await this.alertCtrl.create({
        header: "Favorite Added",
        buttons: [
          {
            text: "OK",
            handler: () => {
              // close the sliding item
              slidingItem.close();
            }
          }
        ]
      });
      // now present the alert on top of all other content
      await alert.present();
    }
  }

  async removeFavorite(
    slidingItem: HTMLIonItemSlidingElement,
    sessionData: any,
    title: string
  ) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: "Would you like to remove this session from your favorites?",
      buttons: [
        {
          text: "Cancel",
          handler: () => {
            // they clicked the cancel button, do not remove the session
            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        },
        {
          text: "Remove",
          handler: () => {
            // they want to remove this session from their favorites
            this.user.removeFavorite(sessionData.name);
            this.updateTutorial();

            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        }
      ]
    });
    // now present the alert on top of all other content
    await alert.present();
  }
}
