import { Component } from '@angular/core';
import { AuthService } from './auth.sevice';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {
    constructor(private authService: AuthService, private router: Router) {

    }

    userName;
    password;
    login(formValue) {
        this.authService.loginUser(formValue.userName, formValue.password);
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}
