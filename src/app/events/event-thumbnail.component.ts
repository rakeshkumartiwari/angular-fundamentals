import { Component, Input } from '@angular/core';
import {IEvent} from './shared/index';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'event-thumbnail',
    template: `

    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div [hidden]="!event?.date">Date: {{event?.date}}</div>
        <div [ngClass]="getStartTimeClass()"
             [ngSwitch]='event?.time'>
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late start)</span>
            <span *ngSwitchDefault>(Normal start)</span>
        </div>
        <div>Price: \${{event?.price}}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left"></span>
            <span>{{event?.location?.city}} , {{event?.location?.country}}</span>
        </div>
    </div>

`,
    styles: [`
    .green{color:#003300 !important;}
    .bold{font-weight:bold;}
    .pad-left{margin-left:10px;}
    .well div {color:#bbb;}
    .thumbnail{min-height:210px;}
    `]
})

export class EventThumbnailComponent {
    @Input() event: IEvent;
    getStartTimeClass() {

        // first approach

     const isEarlyStart = this.event && this.event.time === '8:00 am';
     return {green: isEarlyStart , bold: isEarlyStart };

     // second approach

    //  if (this.event && this.event.time === '8:00 am') {
    //      return 'green bold';
    //  } else {
    //     return '';
    //  }

    // third approach
    // if (this.event && this.event.time === '8:00 am') {
    //          return ['green' , 'bold'];
    //      } else {
    //         return [];
    //      }
    }
}
