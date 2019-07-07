import {AfterViewInit, Component, Inject, OnInit, ViewChildren} from '@angular/core';
import {AppConfig} from '../../../@config/app.config';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../../../@core/services/authentication.service';

@Component({
    selector: 'app-logout',
    templateUrl: 'forgot.component.html',
    styleUrls: ['../account.component.scss']
})
export class ForgotComponent implements OnInit, AfterViewInit {

    @ViewChildren('input') iaf;
    authenticationService: AuthenticationService;
    appConfig: AppConfig;
    isSubmit = false;
    errorMessage: string;

    forgotForm = new FormGroup({
        username: new FormControl('', [
            Validators.required,
            Validators.minLength(3)
        ])
    });

    constructor(
        @Inject(AppConfig) appConfig,
        authenticationService: AuthenticationService) {
        this.appConfig = appConfig;
        this.authenticationService = authenticationService;
        this.errorMessage = null;
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.iaf.first.nativeElement.focus();
    }

    onForgotSubmit() {
        this.isSubmit = true;
        this.errorMessage = null;
        this.authenticationService.forgot(this.forgotForm.get('username').value)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    this.isSubmit = false;
                    this.errorMessage = `Your password is: ${data.password}`;
                },
                error => {
                    this.isSubmit = false;
                    this.errorMessage = error;
                });
    }

}
