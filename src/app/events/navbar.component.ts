import { Component } from '@angular/core';

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

}
