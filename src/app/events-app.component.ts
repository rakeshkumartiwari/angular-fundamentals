import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-app',
  template: '<event-list></event-list>'
})
export class EventsAppComponent {
  title = 'app';
}
