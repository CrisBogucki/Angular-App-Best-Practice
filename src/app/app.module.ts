import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpJwtInterceptor} from './@core/interceptors/http-jwt.interceptor';
import {HttpErrorInterceptor} from './@core/interceptors/http-error.interceptor';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: HttpJwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
    ],
    exports: [HttpClientModule],
    bootstrap: [AppComponent]
})
export class AppModule {
}
