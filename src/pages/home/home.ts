import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LevelgamePage } from '../levelgame/levelgame';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  startGame(){
    this.navCtrl.push(LevelgamePage);
  }

}
