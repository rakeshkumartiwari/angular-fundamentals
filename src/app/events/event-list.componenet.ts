import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'event-list',
    templateUrl: './event-list.component.html'
})

export class EventsListComponent {
    event = {
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
