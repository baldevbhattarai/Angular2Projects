
import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ISubscription } from "rxjs/Subscription";
// Import rxjs retry operator
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';


@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})
export class EmployeeComponent implements OnInit {
    employee: IEmployee;
    empcode: string;
    statusMessage: string = 'Loading data. Please wait...';
    retryCount: number = 1;

    // Create a class property of type ISubscription
    // The ISubscription interface has closed property
    // The ngIf directive in the HTML binds to this property
    // Go to the difinition of ISubscription interface to
    // see the closed property
    subscription: ISubscription;

    constructor(private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router) { }

    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];
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

          // Use the subscription property created above to hold on to the
        // subscription.

        this.subscription= this._employeeService.getEmployeeByCode(empCode)
            // Chain the retry operator to retry on error foreever
            //.retry()
            //retries for 3 times
            // .retry(3)
            // Retry 5 times maximum with a delay of 1 second
            // between each retry attempt

            .retryWhen((err) => {
                return err.scan((retryCount, val) => {
                    retryCount += 1;
                    if (retryCount < 6) {
                        this.statusMessage = 'Retrying...Attempt #' + retryCount;
                        return retryCount;
                    }
                    else {
                        throw (err);
                    }
                }, 0).delay(1000)
            })
            .subscribe((employeeData) => {
                if (employeeData == null) {
                    this.statusMessage =
                        'Employee with the specified Employee Code does not exist';
                }
                else {
                    this.employee = employeeData;
                }
            },
            (error) => {
                this.statusMessage ='Problem with the service. Please try again after sometime';
                console.error(error);
            });
    }

    onBackButtonClick(): void {
        this._router.navigate(["/employees"]);
    }
    onCancelButtonClick(): void {
        this.statusMessage = 'Request cancelled';
        this.subscription.unsubscribe();
    }
}
