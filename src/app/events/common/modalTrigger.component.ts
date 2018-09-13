import { Directive, Inject, OnInit, ElementRef } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit {
    // private el = HTMLElement;

    constructor(private el: ElementRef, @Inject(JQ_TOKEN) private $: any) {
       // this.el = this.ref.nativeElement;
    }

    ngOnInit() {
        this.el.nativeElement.addEventListener('click', e => {
            this.$('#simple-modal').modal({});
        });
    }
}
