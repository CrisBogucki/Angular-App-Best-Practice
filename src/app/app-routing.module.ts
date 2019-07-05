import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './@core/guards/auth.guard';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./@modules/account/account.module').then(m => m.AccountModule)
    },
    {
        path: '',
        loadChildren: () => import('./@modules/app/app.module').then(m => m.AppModule),
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
