import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './@core/guards/auth.guard';

const routes: Routes = [
    {
        path: 'login',
        // @ts-ignore
        loadChildren: () => import('./@modules/account/account.module').then(mod => mod.AccountModule)
    },
    {
        path: '',
        // @ts-ignore
        loadChildren: () => import('./@modules/app/app.module').then(mod => mod.AppModule),
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
