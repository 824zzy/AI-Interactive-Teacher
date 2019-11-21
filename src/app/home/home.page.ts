import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private menu: MenuController, private router: Router) { }

  openFirst(){
    this.menu.enable(true, 'first')
    this.menu.open('first')
  }

  openEnd(){
    this.menu.open('end')
  }

  openCustom(){
    this.menu.enable(true, 'custom')
    this.menu.open('custom')
  }

  ngOnInit() {
  }
  
  goBack(){
    this.router.navigate(['tabs/image-classifier'])
  }
}
