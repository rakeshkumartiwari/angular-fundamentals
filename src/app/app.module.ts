import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { 
  EventsListComponent,
  EventThumbnailComponent, 
  EventDetailsComponent, 
  EventRouteActivator, 
  EventListsResolver, 
  EventService, 
  CreateEventComponent 
  } from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './events/navbar.component';
import { ToastrService } from './events/common/toastr.service';
import { appRoutes } from './routes';
import { Error404Component } from './events/error/404.Component';



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
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListsResolver,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
export function checkDirtyState(component: CreateEventComponent) {

  if (component.isDirty) {
    return window.confirm('You have not save this event, do you really want to cancel? ');
  }
  return true;
}
