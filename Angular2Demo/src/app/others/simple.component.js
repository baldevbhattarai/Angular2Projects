"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// The selector "simple" will be used as the directive
// where we want to use this component. Notice we are
// also using the simpleInput property with interpolation
// to display the value it receives from the parent
// component
var SimpleComponent = /** @class */ (function () {
    // Step 2 : Implement OnChanges Life Cycle Hook interface
    function SimpleComponent() {
    }
    // Step 3 : Implementation for the hook method
    // This code logs the current and previous value
    // to the console.
    SimpleComponent.prototype.ngOnChanges = function (changes) {
        for (var propertyName in changes) {
            var change = changes[propertyName];
            var current = JSON.stringify(change.currentValue);
            var previous = JSON.stringify(change.previousValue);
            console.log(propertyName + ': currentValue = '
                + current + ', previousValue = ' + previous);
            // The above line can be rewritten using
            // placeholder syntax as shown below
            // console.log(`${propertyName}: currentValue
            // = ${current }, previousValue = ${previous }`);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SimpleComponent.prototype, "simpleInput", void 0);
    SimpleComponent = __decorate([
        core_1.Component({
            selector: 'simple',
            template: "You entered : {{simpleInput}}"
        })
        // Step 2 : Implement OnChanges Life Cycle Hook interface
    ], SimpleComponent);
    return SimpleComponent;
}());
exports.SimpleComponent = SimpleComponent;
//# sourceMappingURL=simple.component.js.map