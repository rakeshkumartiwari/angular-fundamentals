import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'event-thumbnail',
    template: `

    <div class="hoverwell">
        <h2>{{event?.name}}</h2>
        <div [hidden]="!event?.date">Date: {{event?.date}}</div>
        <div [ngSwitch]="event?.time">
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
    styles: [`.pad-left{margin-left:10px;}`]
})

export class EventThumbnailComponent {
    @Input() event: any;

}
