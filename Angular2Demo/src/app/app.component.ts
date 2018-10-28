import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    template: `<div>
                    <h1>{{pageHeader}}</h1>
                    <my-employee></my-employee>
               </div>`,
})
export class AppComponent
{
    pageHeader = 'Employee Details2';
}
