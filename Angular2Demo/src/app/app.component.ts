import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'my-app',
    template: ` <list-employee></list-employee>
               `
})
export class AppComponent {
    name: string = "Tom";

    onClick(): void {
        console.log("Butten clicked ")
    }
}

