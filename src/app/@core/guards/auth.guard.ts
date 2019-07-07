import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

import {AuthenticationService} from '../services/authentication.service';


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    router: Router;
    authenticationService: AuthenticationService;

    constructor(router: Router, authenticationService: AuthenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            return true;
        }

        this.router.navigate(['/account/login'], {queryParams: {returnUrl: state.url}});
        return false;
    }
}
