import {AfterViewInit, Component, Inject, OnInit, ViewChildren} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppConfig} from '../../../@config/app.config';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['../account.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

    @ViewChildren('input') iaf;
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

    ngAfterViewInit() {
        this.iaf.first.nativeElement.focus();
    }

    onLoginSubmit() {
        console.warn(this.loginForm.value);
    }

}
