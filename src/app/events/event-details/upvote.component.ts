import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'up-vote',
    template: `
<div class="votingWidgatContainer pointable" (click)="onClick()">
    <div class="well votingWidgt">
        <div class="votingButton">
            <i *ngIf="voted" class="glyphicon glyphicon-heart"></i>
            <i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i>
        </div>
        <div class="badge badge-inverse votingCount">
            <div>{{count}}</div>
        </div>
    </div>
</div>
    `,
    styleUrls: ['./upvote.component.css']
})

export class UpvoteComponent {
    @Input() count: number;
    @Input() voted: boolean;
    @Output() vote = new EventEmitter();

    onClick() {
        this.vote.emit({});
    }

}
