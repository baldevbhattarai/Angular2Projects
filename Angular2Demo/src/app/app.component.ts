import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div>
                    <h1>{{pageHeader}}</h1>
                    <h2>{{'first Name: '+firstName}}</h2>
                    <img src='{{imagePath}}'/>
                    <!--using property binding: notice that I have used square bracket for image emement source property and quote for component class property.-->
                    <img [src]='imagePath'/>
                    <my-employee></my-employee>
                    <br/>{{badHtml}} <br/>
                  
                    <button [disabled]='isDisabled'>Click me</button>

               </div>`,
})
export class AppComponent {
    pageHeader = 'Employee Details';
    firstName: string = 'Tom';
    imagePath: string = 'https://www.premierleague.com/resources/ver/i/elements/premier-league-logo-header.svg';
    isDisabled: boolean = false;
    badHtml: string = 'Hello <script>alert("Hacked");</script> World';
}

