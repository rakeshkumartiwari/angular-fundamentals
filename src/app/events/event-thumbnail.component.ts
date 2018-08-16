import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'event-thumbnail',
    template: `

<div class="box">
        <h1>{{event.name}}</h1>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span>&nbsp;</span>
            <span>{{event.location.city}} , {{event.location.country}}</span>
        </div>
    </div>

`
})

export class EventThumbnailComponent {
    @Input() event: any;
}
