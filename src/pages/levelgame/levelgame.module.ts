import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LevelgamePage } from './levelgame';

@NgModule({
  declarations: [
    LevelgamePage,
  ],
  imports: [
    IonicPageModule.forChild(LevelgamePage),
  ],
})
export class LevelgamePageModule {}
