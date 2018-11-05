"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageHeader = 'Employee Details';
        this.firstName = 'Tom';
        this.imagePath = 'https://www.premierleague.com/resources/ver/i/elements/premier-league-logo-header.svg';
        this.isDisabled = false;
        this.badHtml = 'Hello <script>alert("Hacked");</script> World';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div>\n                    <h1>{{pageHeader}}</h1>\n                    <h2>{{'first Name: '+firstName}}</h2>\n                    <img src='{{imagePath}}'/>\n                    <!--using property binding: notice that I have used square bracket for image emement source property and quote for component class property.-->\n                    <img [src]='imagePath'/>\n                    <my-employee></my-employee>\n                    <br/>{{badHtml}} <br/>\n                  \n                    <button [disabled]='isDisabled'>Click me</button>\n\n               </div>",
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map