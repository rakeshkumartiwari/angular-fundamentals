import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'event-list',
    template:
        `<div class="container">
            <h1>Upcoming Angular Events</h1>
         <hr>
         <event-thumbnail [event]="event1"></event-thumbnail>
        </div>
        `

})

export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '16/08/2018',
        time: '10:00 am',
        price: '5000.00',
        imageUrl: '/assets/images/basic-shield.png',
        location: {
            address: 'Lingampally',
            city: 'Hyderabad',
            country: 'India'
        }

    };

}
