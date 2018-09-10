import {Component} from '@angular/core';

@Component({
    selector: 'simple-modal',
    template: `
<div id="simple-modal" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-contant">
            <div class="modal-header">
                <button type="button" class="close"
                    data-dismiss="modal"><span>&times;</span></button>
                <h4 class="modal-title">{{title}}</h4>
            </div>
            <div class="modal.body">
            <ng-contant></ng-contant>
            </div>
        </div>
    </div>
</div>
    `
})