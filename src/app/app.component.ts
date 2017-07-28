/**
 * Created by ghost on 28/7/17.
 */

import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div>Hello my name is {{name}}.
            <button (click)="sayMyName()">Say my Name</button>
         </div>`,
})

export class AppComponent  {

    name:string;
    constructor(){
        this.name = "Sandeep Maity"
    }
    sayMyName(){
        console.log("My Name is ",this.name)
    }
}
