import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'collapsible-well',
    template:
        `
    <div (click)="toggleContent()" class="well hoverwell thumbnail">
    <h4>{{title}}</h4>

    <ng-content *ngIf="visible"></ng-content>
    </div>
    `
})

export class CollapsibleComponent {
    @Input() title: string;
    visible = true;
    toggleContent() {
        this.visible = !this.visible;
    }

}
