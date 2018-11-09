import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'my-app',
    template: ` <input [value]='name' (input)= 'name=$event.target.value'>
                <br/>
                <input value='ram' [(ngModel)]='name'> 
                <br/>
                The value entered:{{name}}
               `
})
export class AppComponent {
    name: string = "Tom";

    onClick(): void {
        console.log("Butten clicked ")
    }
}

