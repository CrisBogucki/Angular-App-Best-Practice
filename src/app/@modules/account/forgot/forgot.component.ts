import {AfterViewInit, Component, Inject, OnInit, ViewChildren} from '@angular/core';
import {AppConfig} from '../../../@config/app.config';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-logout',
    templateUrl: 'forgot.component.html',
    styleUrls: ['../account.component.scss']
})
export class ForgotComponent implements OnInit, AfterViewInit {

    @ViewChildren('input') iaf;
    appConfig: AppConfig;

    forgotForm = new FormGroup({
        userName: new FormControl('', [
            Validators.required,
            Validators.minLength(3)
        ])
    });

    constructor(@Inject(AppConfig) appConfig) {
        this.appConfig = appConfig;
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.iaf.first.nativeElement.focus();
    }

    onForgotSubmit() {
        console.warn(this.forgotForm.value);
    }

}
