import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuickGameComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'quick-game',
  templateUrl: 'quick-game.html'
})
export class QuickGameComponent {
  mydata: any;
  easy: Array<Object>;
  normal: Array<Object>;
  hard: Array<Object>;
  datasCollection: Array<Object>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.easy = [
      { number1: "1",  math:"+", number2: "3", value: "4" },
      { number1: "2",  math:"+", number2: "2", value: "4" },
      { number1: "4",  math:"+", number2: "3", value: "7" },
      { number1: "5",  math:"+", number2: "5", value: "10" }
    ];
    this.normal = [
      { number1: "7",  math:"+", number2: "2", value: "9" },
      { number1: "1",  math:"+", number2: "5", value: "6" },
      { number1: "6",  math:"+", number2: "6", value: "12" },
      { number1: "5",  math:"+", number2: "7", value: "12" }
    ];
    this.hard = [
      { number1: "9",  math:"+",number2: "8", value: "17" },
      { number1: "8",  math:"+", number2: "8", value: "16" },
      { number1: "9",  math:"+", number2: "9", value: "18" },
      { number1: "7",  math:"+", number2: "7", value: "14" }
    ];
    this.datasCollection = [];
    this.datasCollection.push(this.easy, this.normal, this.hard);
    this.mydata = this.datasCollection[Math.floor((Math.random() * this.datasCollection.length) + 0)];
    console.log(this.mydata);
  }

}
