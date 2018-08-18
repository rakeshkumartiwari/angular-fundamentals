import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import {EventsListComponent} from './events/event-list.componenet';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavBarComponent} from './events/navbar.component';
import {EventService} from './events/shared/event.service';
import {ToastrService} from './events/common/toastr.service';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {appRoutes} from './routes';
import { RouterModule} from '@angular/router';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './events/error/404.Component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';


@NgModule({

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],

  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [EventService, ToastrService, EventRouteActivator],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
