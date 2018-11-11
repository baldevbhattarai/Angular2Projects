import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'my-app',
    template: `Your Text : <input type='text' [(ngModel)]='userText'/>
               <br/><br/>
               <simple [simpleInput]='userText'></simple>
              `
})
export class AppComponent {
    userText: string = "Bal";
}

