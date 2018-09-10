import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {TOASTR_TOKEN, Toastr} from '../events/common/toastr.service';
import { AuthService } from './auth.sevice';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
 em {float:right; color:#E05C65; padding-left:10px;}
 .error input {background-color:#E3C3C5;}
 .error ::-webkit-input-placeholder {color:#999; }
 .error ::-moz-input-placeholder {color:#999; }
 .error :-moz-input-placeholder {color:#999; }
 .error :ms-input-placeholder {color:#999; }
 `]
})



export class ProfileComponent implements OnInit {
  private firstName: FormControl;
  private lastName: FormControl;
  profileForm: FormGroup;

  constructor(private authservice: AuthService, private router: Router, @Inject(TOASTR_TOKEN) private toastr: Toastr) {

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.firstName = new FormControl(this.authservice.currentUser.firstName, Validators.required);
    this.lastName = new FormControl(this.authservice.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });

  }


  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authservice.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.toastr.success('Profile Saved.');
    }
  }

  cancel() {
    this.router.navigate(['events']);
  }

  validateFirstName() {
    return this.firstName.valid && this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid && this.lastName.untouched;
  }
}
