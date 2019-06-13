import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';

import {AccountRoutingModule} from './account-routing.module';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        AccountRoutingModule,
    ]
})
export class AccountModule {
}
