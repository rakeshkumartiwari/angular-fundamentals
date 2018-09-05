import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/index';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
    .container{padding-left:20px;padding-right:20px;}
    .event-image{height:100px;}
    a{cursor:pointer}
    `]
})

export class EventDetailsComponent {
    event: any;
    addMode: boolean;
    constructor(private eventService: EventService, private route: ActivatedRoute) {
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

    addSession() {
        this.addMode = true;
    }

    cancelAddSession() {
        this.addMode = false;
    }

}
