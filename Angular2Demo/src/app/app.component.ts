import { Component } from '@angular/core';
import { Console } from '@angular/core/src/console';

@Component({
    selector: 'my-app',
    template: `
                <my-employee></my-employee>
               `
})
export class AppComponent {

    onClick(): void {
        console.log("Butten clicked ")
    }
}

