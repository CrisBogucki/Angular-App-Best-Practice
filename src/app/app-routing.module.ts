import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './@core/guards/auth.guard';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: './@modules/account/account.module#AccountModule'
    },
    {
        path: '',
        loadChildren: './@modules/app/app.module#AppModule',
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
