import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    template: `<div>
                    <h1>{{pageHeader}}</h1>
                    <h2>{{'first Name: '+firstName}}</h2>
                    <my-employee></my-employee>
               </div>`,
})
export class AppComponent
{
    pageHeader = 'Employee Details';
    firstName: string = 'Tom';
}
