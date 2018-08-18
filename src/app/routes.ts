import {Routes} from '@angular/router';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/event-list.componenet';

export const appRoutes: Routes = [
{path: 'event', component: EventsListComponent},
{path: 'event/:id', component: EventDetailsComponent},
{path: '', redirectTo: '/event' , pathMatch: 'full'}

];
