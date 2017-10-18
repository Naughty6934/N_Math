import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlayerPage } from '../player/player';

/**
 * Generated class for the LevelgamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-levelgame',
  templateUrl: 'levelgame.html',
})
export class LevelgamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LevelgamePage');
  }
  playtoGames() {
    this.navCtrl.push(PlayerPage);
  }

}
