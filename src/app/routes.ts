import { Routes } from '@angular/router';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/event-list.componenet';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './events/error/404.Component';
import {EventRouteActivator} from './events/event-details/event-route-activator.service';
import { EventListsResolver } from './events/events-list-resolver.service';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: {events: EventListsResolver}},
    { path: 'events/:id', component: EventDetailsComponent , canActivate: [EventRouteActivator] },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: '404', component: Error404Component },
    {path: 'user', loadChildren: './user/user.module#UserModule'}
];
