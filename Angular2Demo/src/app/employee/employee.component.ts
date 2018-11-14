
import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})
export class EmployeeComponent implements OnInit {
    employee: IEmployee;
    empcode: string;
    statusMessage: string = 'Loading data. Please wait...';

    constructor(private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router) { }

    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];
        this.empcode = empCode;
        console.log("empcode: " + empCode);

        this._employeeService.getEmployeeByCode(empCode)
            .then((employeeData) => {
                if (employeeData == null) {
                    this.statusMessage ='Employee with the specified Employee Code does not exist';

                }
                else {
                    this.employee = employeeData;
                }
            }).catch((error) => {
                this.statusMessage =
                    'Problem with the service. Please try again after sometime';
                console.error(error);
            });
    }

    onBackButtonClick(): void {
        this._router.navigate(["/employees"]);
    }
}
