import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared/index';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
    .container{padding-left:20px;padding-right:20px;}
    .event-image{height:100px;}
    a{cursor:pointer}
    .btn-default{
        background: rgb(82, 106, 142);
        color:white;
        border: none;
        margin:1px;
        height:40px;
        width:100px;
    }
    `]
})

export class EventDetailsComponent {
    event: any;
    addMode: boolean;
    filterBy = 'all';

    constructor(private eventService: EventService, private route: ActivatedRoute) {
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }

}
