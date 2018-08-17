import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from './common/toastr.service';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'event-list',
    template:
        `<div class="container">
            <h1>Upcoming Angular Events</h1>
         <hr>
         <div class="row">
         <div class="col-md-5" *ngFor="let event of events" >
          <event-thumbnail  [event]="event" (click)="handleThumbnailClick(event.name)"></event-thumbnail>
         </div>
         </div>
        </div>
        `

})

export class EventsListComponent {
    events: any[];
    constructor(private eventService: EventService, private toastr: ToastrService) {
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.events = this.eventService.getEvents();
    }

    handleThumbnailClick(eventName) {
        this.toastr.info(eventName);
    }
}
