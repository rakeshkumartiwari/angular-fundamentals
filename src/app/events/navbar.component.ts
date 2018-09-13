import { Component } from '@angular/core';
import { AuthService } from '../user/auth.sevice';
import { ISession } from './shared/event.model';
import { EventService } from './shared/event.service';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
    .nav.navbar-nav {font-size: 15px;}
    li > a.active {color: #F97924; }
    `]

})

export class NavBarComponent {
    searchTerm = '';
    foundSession: ISession[];
    constructor(public auth: AuthService, private eventService: EventService) {

    }

    searchSession(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe(
            sessions => {
                this.foundSession = sessions;
                console.log(this.foundSession);
            }
        );
    }
}
