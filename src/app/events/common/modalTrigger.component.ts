import { Directive, Inject, OnInit, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit {
    // tslint:disable-next-line:no-input-rename
    @Input('modal-trigger') modalId: string;
    constructor(private el: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    }

    ngOnInit() {
        this.el.nativeElement.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({});
        });
    }
}
