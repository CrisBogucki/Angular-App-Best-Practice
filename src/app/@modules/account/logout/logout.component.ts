import {Component, Inject, OnInit} from '@angular/core';
import {AppConfig} from '../../../@config/app.config';

@Component({
    selector: 'app-logout',
    templateUrl: 'logout.component.html',
    styleUrls: ['../account.component.scss']
})
export class LogoutComponent implements OnInit {

    appConfig: AppConfig;

    constructor(@Inject(AppConfig) appConfig, ) {
        this.appConfig = appConfig;
    }

    ngOnInit() {

    }

}
