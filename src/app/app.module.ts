import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LevelgamePage } from '../pages/levelgame/levelgame';
import { QuickGameComponent } from '../components/quick-game/quick-game';
import { PlayerPage } from '../pages/player/player';
import { ScorePage } from '../pages/score/score';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LevelgamePage,
    ScorePage,
    PlayerPage,
    QuickGameComponent
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlayerPage,
    ScorePage,
    LevelgamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
