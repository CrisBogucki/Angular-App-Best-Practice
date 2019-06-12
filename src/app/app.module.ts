import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from './@core/interceptors/jwt.interceptor';
import {ErrorInterceptor} from './@core/interceptors/error.interceptor';

import {FooterComponent} from './@core/ui/footer/footer.component';
import {NavComponent} from './@core/ui/nav/nav.component';
import {BreadcrumbComponent} from './@core/ui/breadcrumb/breadcrumb.component';
import {MenuComponent} from './@core/ui/menu/menu.component';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        NavComponent,
        BreadcrumbComponent,
        MenuComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
