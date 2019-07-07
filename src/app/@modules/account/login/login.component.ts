import {AfterViewInit, Component, Inject, OnDestroy, OnInit, ViewChildren} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppConfig} from '../../../@config/app.config';
import {AuthenticationService} from '../../../@core/services/authentication.service';
import {first} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['../account.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChildren('input') iaf;

    appConfig: AppConfig;
    authenticationService: AuthenticationService;
    router: Router;
    route: ActivatedRoute;
    returnUrl: string;
    isSubmit = false;
    errorMessage: string;

    loginForm = new FormGroup({
        username: new FormControl('', [
            Validators.required,
            Validators.minLength(3)
        ]),
        password: new FormControl('', [
            Validators.required
        ]),
    });

    constructor(
        @Inject(AppConfig) appConfig,
        authenticationService: AuthenticationService,
        router: Router,
        route: ActivatedRoute) {
        this.appConfig = appConfig;
        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
        this.errorMessage = null;
    }

    ngOnInit(): void {
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    }

    ngAfterViewInit(): void {
        this.iaf.first.nativeElement.focus();
    }

    ngOnDestroy(): void {
    }

    onLoginSubmit() {
        this.isSubmit = true;
        this.errorMessage = null;
        this.authenticationService.login(this.loginForm.get('username').value, this.loginForm.get('password').value)
            .pipe(first())
            .subscribe(
                () => {
                    this.isSubmit = false;
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.isSubmit = false;
                    this.errorMessage = error;
                });

    }

}
