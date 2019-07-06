import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppConfig} from '../../../@config/app.config';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['../account.component.scss']
})
export class LoginComponent implements OnInit {

    submitted = false;
    appConfig: AppConfig;

    loginForm = new FormGroup({
        userName: new FormControl('', [
            Validators.required,
            Validators.minLength(3)
        ]),
        password: new FormControl('', [
            Validators.required
        ]),
    });

    constructor(@Inject(AppConfig) appConfig) {
        this.appConfig = appConfig;
    }

    ngOnInit() {
    }

    onLoginSubmit() {
        console.warn(this.loginForm.value);
    }

}
