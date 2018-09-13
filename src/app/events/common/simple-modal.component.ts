import {Component, Input} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'simple-modal',
    template: `
<div id="{{elementId}}" class="modal fade" tabindex="-1" >
    <div class="modal-dialog">
        <div class="modal-contant">
            <div class="modal-header">
                <button type="button" class="close"
                    data-dismiss="modal"><span>&times;</span></button>
                <h4 class="modal-title">{{title}}</h4>
            </div>
            <div class="modal-body">
            <ng-content></ng-content>
            </div>
        </div>
    </div>
</div>
    `,
    styles: [
        `
        ng-content{background: rgb(82, 106, 142)}
        .modal-contant{background:rgb(82, 106, 142);}
        `
    ]
})

export class SimpleModalComponent {
@Input() title: string;
@Input() elementId: string;
}

