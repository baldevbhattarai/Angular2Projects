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
var employee_service_1 = require("./employee.service");
var router_1 = require("@angular/router");
// Import rxjs retry operator
require("rxjs/add/operator/retry");
require("rxjs/add/operator/retryWhen");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/scan");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(_employeeService, _activatedRoute, _router) {
        this._employeeService = _employeeService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.statusMessage = 'Loading data. Please wait...';
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var empCode = this._activatedRoute.snapshot.params['code'];
        //this._employeeService.getEmployeeByCode(empCode)
        //    .then((employeeData) => {
        //        if (employeeData == null) {
        //            this.statusMessage ='Employee with the specified Employee Code does not exist';
        //        }
        //        else {
        //            this.employee = employeeData;
        //        }
        //    }).catch((error) => {
        //        this.statusMessage =
        //            'Problem with the service. Please try again after sometime';
        //        console.error(error);
        //    });
        this._employeeService.getEmployeeByCode(empCode)
            // Chain the retry operator to retry on error foreever
            //.retry()
            //retries for 3 times
            // .retry(3)
            // Retry 5 times maximum with a delay of 1 second
            // between each retry attempt
            .retryWhen(function (err) {
            return err.scan(function (retryCount, val) {
                retryCount += 1;
                if (retryCount < 6) {
                    _this.statusMessage = 'Retrying...Attempt #' + retryCount;
                    return retryCount;
                }
                else {
                    throw (err);
                }
            }, 0).delay(1000);
        })
            .subscribe(function (employeeData) {
            if (employeeData == null) {
                _this.statusMessage =
                    'Employee with the specified Employee Code does not exist';
            }
            else {
                _this.employee = employeeData;
            }
        }, function (error) {
            _this.statusMessage = 'Problem with the service. Please try again after sometime';
            console.error(error);
        });
    };
    EmployeeComponent.prototype.onBackButtonClick = function () {
        this._router.navigate(["/employees"]);
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'my-employee',
            templateUrl: 'app/employee/employee.component.html',
            styleUrls: ['app/employee/employee.component.css']
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map