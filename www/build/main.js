webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayerPage = (function () {
    function PlayerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PlayerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlayerPage');
    };
    return PlayerPage;
}());
PlayerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-player',template:/*ion-inline-start:"/Users/admin/Desktop/N_MathII/N_Math/src/pages/player/player.html"*/'<!--\n  Generated template for the PlayerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>player</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <quick-game></quick-game>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Desktop/N_MathII/N_Math/src/pages/player/player.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], PlayerPage);

//# sourceMappingURL=player.js.map

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/levelgame/levelgame.module": [
		266,
		2
	],
	"../pages/player/player.module": [
		267,
		1
	],
	"../pages/score/score.module": [
		268,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levelgame_levelgame__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.startGame = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__levelgame_levelgame__["a" /* LevelgamePage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/admin/Desktop/N_MathII/N_Math/src/pages/home/home.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    \n  </ion-navbar>\n</ion-header> -->\n\n<ion-content>\n  <div id="wrapper">\n    <div id="content" text-center>\n\n      <ion-grid>\n        <ion-row id="row-button">\n          <ion-col col-3>\n\n          </ion-col>\n          <ion-col col-6 id="col-button">\n            <h4 text-center>Best : </h4>\n            <button ion-button block (click)="startGame()">Start</button>\n          </ion-col>\n          <ion-col col-3>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <!-- <img src="../assets/pic/N_Math2.gif" alt="" id="math"> -->\n      <!-- <ion-card>\n  <ion-card-content >\n    \n    \n  </ion-card-content>\n</ion-card> -->\n\n    </div>\n  </div>\n  <footer id="footer">\n    <div id="footer-content">\n\n\n      <ion-grid>\n        <ion-row >\n          <ion-col col-3 class="cartoon" text-center>\n            <img src="../assets/pic/elephant.gif" alt="">\n\n          </ion-col>\n\n          <ion-col col-6 text-center>\n\n          </ion-col>\n\n          <ion-col col-3 class="cartoon" text-center>\n            <img src="../assets/pic/lion.gif" alt="">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </footer>\n</ion-content>'/*ion-inline-end:"/Users/admin/Desktop/N_MathII/N_Math/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScorePage = (function () {
    function ScorePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ScorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ScorePage');
    };
    return ScorePage;
}());
ScorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-score',template:/*ion-inline-start:"/Users/admin/Desktop/N_MathII/N_Math/src/pages/score/score.html"*/'<!--\n  Generated template for the ScorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-row>\n    <ion-col col 2>\n    </ion-col>\n    <ion-col col 8>\n        <ion-card>\n              <ion-card-content>\n               <h4>Best : </h4>\n               <h4>Score : </h4>\n              </ion-card-content>\n            </ion-card>\n    </ion-col>\n    <ion-col col 2>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n      <ion-col col 3>\n      </ion-col>\n      <ion-col col 3>\n          <button ion-button icon-only>\n              <ion-icon name="home"></ion-icon>\n            </button>\n      </ion-col>\n      <ion-col col 3>\n          <button ion-button icon-only>\n              <ion-icon name="md-refresh"></ion-icon>\n            </button>\n      </ion-col>\n      <ion-col col 3>\n\n        </ion-col>\n    </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/admin/Desktop/N_MathII/N_Math/src/pages/score/score.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ScorePage);

//# sourceMappingURL=score.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_levelgame_levelgame__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_quick_game_quick_game__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_player_player__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_score_score__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_levelgame_levelgame__["a" /* LevelgamePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_score_score__["a" /* ScorePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_player_player__["a" /* PlayerPage */],
            __WEBPACK_IMPORTED_MODULE_8__components_quick_game_quick_game__["a" /* QuickGameComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/levelgame/levelgame.module#LevelgamePageModule', name: 'LevelgamePage', segment: 'levelgame', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/player/player.module#PlayerPageModule', name: 'PlayerPage', segment: 'player', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/score/score.module#ScorePageModule', name: 'ScorePage', segment: 'score', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_player_player__["a" /* PlayerPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_score_score__["a" /* ScorePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_levelgame_levelgame__["a" /* LevelgamePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/admin/Desktop/N_MathII/N_Math/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/admin/Desktop/N_MathII/N_Math/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickGameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the QuickGameComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var QuickGameComponent = (function () {
    function QuickGameComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.easy = [
            { number1: "1", math: "+", number2: "3", value: "4" },
            { number1: "2", math: "+", number2: "2", value: "4" },
            { number1: "4", math: "+", number2: "3", value: "7" },
            { number1: "5", math: "+", number2: "5", value: "10" }
        ];
        this.normal = [
            { number1: "7", math: "+", number2: "2", value: "9" },
            { number1: "1", math: "+", number2: "5", value: "6" },
            { number1: "6", math: "+", number2: "6", value: "12" },
            { number1: "5", math: "+", number2: "7", value: "12" }
        ];
        this.hard = [
            { number1: "9", math: "+", number2: "8", value: "17" },
            { number1: "8", math: "+", number2: "8", value: "16" },
            { number1: "9", math: "+", number2: "9", value: "18" },
            { number1: "7", math: "+", number2: "7", value: "14" }
        ];
        this.datasCollection = [];
        this.datasCollection.push(this.easy, this.normal, this.hard);
        this.mydata = this.datasCollection[Math.floor((Math.random() * this.datasCollection.length) + 0)];
        console.log(this.mydata);
    }
    return QuickGameComponent;
}());
QuickGameComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'quick-game',template:/*ion-inline-start:"/Users/admin/Desktop/N_MathII/N_Math/src/components/quick-game/quick-game.html"*/'<!-- Generated template for the QuickGameComponent component -->\n<div class="row" *ngFor="let data of mydata">\n  <div class="col">\n      <h1 text-center>{{data.number1}}</h1>\n    </div>\n  <div class="col"> \n      <h1 text-center>{{data.math}}</h1>\n</div>\n  <div class="col"> \n        <h1 text-center>{{data.number2}}</h1>\n            </div>          \n</div>\n'/*ion-inline-end:"/Users/admin/Desktop/N_MathII/N_Math/src/components/quick-game/quick-game.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], QuickGameComponent);

//# sourceMappingURL=quick-game.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelgamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_player__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LevelgamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LevelgamePage = (function () {
    function LevelgamePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LevelgamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LevelgamePage');
    };
    LevelgamePage.prototype.playtoGames = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__player_player__["a" /* PlayerPage */]);
    };
    return LevelgamePage;
}());
LevelgamePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-levelgame',template:/*ion-inline-start:"/Users/admin/Desktop/N_MathII/N_Math/src/pages/levelgame/levelgame.html"*/'<!--\n  Generated template for the LevelgamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<!-- <ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content>\n  <div id="blank">\n\n  </div>\n  <div id="button">\n    <ion-row>\n      <ion-col col-2>\n      </ion-col>\n      <ion-col col-8>\n        <button ion-button full icon-only color="secondary" (click)="playtoGames()">\n          <ion-icon name="md-cloudy"> Easy</ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-2>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-2>\n      </ion-col>\n      <ion-col col-8>\n        <button ion-button full icon-only (click)="playtoGames()" text-left>\n          <ion-icon name="md-happy"> Normal</ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-2>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-2>\n      </ion-col>\n      <ion-col col-8>\n        <button ion-button full icon-only color="danger" (click)="playtoGames()">\n          <ion-icon name="md-flame"> Hard</ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-2>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/admin/Desktop/N_MathII/N_Math/src/pages/levelgame/levelgame.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], LevelgamePage);

//# sourceMappingURL=levelgame.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map