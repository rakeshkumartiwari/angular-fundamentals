import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './create-event.component.html',
    styles: [`.pad-left{margin-left:10px;}`]
})


export class CreateEventComponent {

    isDirty = true;

    constructor(private router: Router) {

    }

    cancel() {
        this.router.navigate(['/events']);
    }

}
