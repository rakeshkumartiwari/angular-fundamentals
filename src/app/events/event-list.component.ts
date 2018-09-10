import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import {IEvent} from './shared/index';

@Component({
    template:
        `<div class="container">
            <h1>Upcoming Angular Events</h1>
         <hr>
         <div class="row">
         <div class="col-md-5" *ngFor="let event of events" >
          <event-thumbnail  [event]="event"></event-thumbnail>
         </div>
         </div>
        </div>
        `

})

export class EventsListComponent {
    events: IEvent[];
    constructor(private eventService: EventService, private route: ActivatedRoute) {
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
       this.events = this.route.snapshot.data['events'];
    }

}
