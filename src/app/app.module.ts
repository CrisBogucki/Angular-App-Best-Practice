import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpJwtInterceptor} from './@core/interceptors/http-jwt.interceptor';
import {HttpErrorInterceptor} from './@core/interceptors/http-error.interceptor';

import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {AppConfig} from './@config/app.config';
import {environment} from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {authorizationMockService} from './@core/mocks/authorization-mock.service';
import {SessionConfig} from './@config/session.config';
import {SessionService} from './@core/services/session.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        AppConfig, SessionConfig, SessionService,
        {provide: HTTP_INTERCEPTORS, useClass: HttpJwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
        {provide: LocationStrategy, useClass: PathLocationStrategy},
        {provide: APP_BASE_HREF, useValue: environment.app_base_href},
        authorizationMockService
    ],
    exports: [HttpClientModule],
    bootstrap: [AppComponent]
})
export class AppModule {
}
