import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'collapsible-well',
    template:
        `
    <div (click)="toggleContent()" class="well hoverwell thumbnail">
    <h4>
    <ng-content select="[well-title]"></ng-content>
    </h4>
    <ng-content *ngIf="visible" select="[well-body]"></ng-content>
    </div>
    `
})

export class CollapsibleComponent {
    visible = true;
    toggleContent() {
        this.visible = !this.visible;
    }

}
