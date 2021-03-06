import { Routes } from '@angular/router';
import {
  EventDetailsComponent,
  EventsListComponent,
  CreateEventComponent,
  EventListsResolver,
  CreateSessionComponent,
  EventResolver
} from './events/index';
import { Error404Component } from './events/error/404.Component';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListsResolver }
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    resolve: {event: EventResolver}
  },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '404', component: Error404Component },
  { path: 'user', loadChildren: './user/user.module#UserModule' }
];
