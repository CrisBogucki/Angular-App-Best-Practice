import {Component, Inject, OnInit} from '@angular/core';
import {AppConfig} from '../../../@config/app.config';
import {AuthenticationService} from '../../../@core/services/authentication.service';

@Component({
    selector: 'app-logout',
    templateUrl: 'logout.component.html',
    styleUrls: ['../account.component.scss']
})
export class LogoutComponent implements OnInit {

    appConfig: AppConfig;
    authenticationService: AuthenticationService;

    constructor(@Inject(AppConfig) appConfig, authenticationService: AuthenticationService) {
        this.appConfig = appConfig;
        this.authenticationService = authenticationService;
    }

    ngOnInit() {
        this.authenticationService.logout();
    }

}
