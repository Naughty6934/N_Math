import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello QuickGameComponent Component');
    this.text = 'Hello World';
  }

}
