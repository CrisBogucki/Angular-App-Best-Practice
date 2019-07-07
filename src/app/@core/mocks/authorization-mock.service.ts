import {Injectable} from '@angular/core';
import {HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {delay, mergeMap, materialize, dematerialize} from 'rxjs/operators';

import {User} from '../../@shared/models/user.model';

@Injectable()
export class AuthorizationMockService implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const users: User[] = [
            {id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User'}
        ];

        const authHeader = request.headers.get('Authorization');
        const isLoggedIn = authHeader && authHeader.startsWith('Bearer fake-jwt-token');

        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {

            // authenticate - public
            if (request.url.endsWith('/account/authenticate') && request.method === 'POST') {
                const user = users.find(x => x.username === request.body.username && x.password === request.body.password);
                if (!user) {
                    return error('Username or password is incorrect');
                }
                return ok({
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    token: `fake-jwt-token`
                });
            }

            // authenticate - public
            if (request.url.endsWith('/account/forgot') && request.method === 'POST') {
                const user = users.find(x => x.username === request.body.username);
                if (!user) {
                    return error('Username is not exist');
                }
                return ok({
                    password: user.password
                });
            }

            // get all users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                if (!isLoggedIn) {
                    return unauthorised();
                }
                return ok(users);
            }

            // pass through any requests not handled above
            return next.handle(request);
        }))
            .pipe(materialize())
            .pipe(delay(2500))
            .pipe(dematerialize());

        // private helper functions

        function ok(body) {
            return of(new HttpResponse({status: 200, body}));
        }

        function unauthorised() {
            return throwError({status: 401, error: {message: 'Unauthorised'}});
        }

        function error(message) {
            return throwError({status: 400, error: {message}});
        }
    }
}

export let authorizationMockService = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthorizationMockService,
    multi: true
};
