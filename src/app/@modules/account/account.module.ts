import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AccountRoutingModule} from './account-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {ForgotComponent} from './forgot/forgot.component';


@NgModule({
    declarations: [
        LoginComponent,
        LogoutComponent,
        ForgotComponent
    ],
    imports: [
        CommonModule,
        AccountRoutingModule,
        ReactiveFormsModule,
    ]
})
export class AccountModule {
}
