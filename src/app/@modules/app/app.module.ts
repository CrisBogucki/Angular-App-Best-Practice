import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppRoutingModule} from './app-routing.module';
import {LayoutComponent} from './layout/layout.component';

@NgModule({
    declarations: [LayoutComponent],
    imports: [
        CommonModule,
        AppRoutingModule
    ]
})
export class AppModule {
}
