import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service'

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],

    // Register EmployeeService in this component by
    // declaring it in the providers array
    providers: [EmployeeService]
})

export class EmployeeListComponent implements OnInit {

    employees: IEmployee[];
    statusMessage: string ="Loading data. Please wait...";
    // This property keeps track of which radio button is selected
    // We have set the default value to All, so all the employees
    // are displayed in the table by default
    selectedEmployeeCountRadioButton: string = 'All';


    constructor(private _employeeService: EmployeeService) {

    }
    ngOnInit() {
        this._employeeService.getEmployees()
            .subscribe(employeesData => this.employees = employeesData, error => {
               console.error(error);
                this.statusMessage = 'Problem with the service. Please try again after sometime';
            });
    }


    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Male').length;
    }

    getFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }

    // Depending on which radio button is selected, this method updates
    // selectedEmployeeCountRadioButton property declared above
    // This method is called when the child component (EmployeeCountComponent)
    // raises the custom event - countRadioButtonSelectionChanged
    // The event binding is specified in employeeList.component.html
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
}