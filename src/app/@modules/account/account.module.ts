import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';

import {AccountRoutingModule} from './account-routing.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        AccountRoutingModule,
        ReactiveFormsModule,
    ]
})
export class AccountModule {
}
