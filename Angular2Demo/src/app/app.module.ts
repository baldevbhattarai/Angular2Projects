import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeCountComponent } from './employee/employeeCount.component';
import { SimpleComponent } from './others/simple.component';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, EmployeeComponent, EmployeeListComponent, EmployeeTitlePipe, EmployeeCountComponent, SimpleComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
