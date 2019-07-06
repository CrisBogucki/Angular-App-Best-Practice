import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpJwtInterceptor} from './@core/interceptors/http-jwt.interceptor';
import {HttpErrorInterceptor} from './@core/interceptors/http-error.interceptor';

import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from '@angular/common';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {AppConfig} from './@config/app.config';
import {environment} from '../environments/environment';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        AppConfig,
        {provide: HTTP_INTERCEPTORS, useClass: HttpJwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
        {provide: LocationStrategy, useClass: PathLocationStrategy},
        {provide: APP_BASE_HREF, useValue: environment.app_base_href}
    ],
    exports: [HttpClientModule],
    bootstrap: [AppComponent]
})
export class AppModule {
}
