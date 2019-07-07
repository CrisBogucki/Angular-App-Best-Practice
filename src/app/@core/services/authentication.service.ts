import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {User} from '../../@shared/models/user.model';

import {environment} from '../../../environments/environment';
import {SessionConfig} from '../../@config/session.config';
import {SessionService} from './session.service';

@Injectable({providedIn: 'root'})
export class AuthenticationService {

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    private sessionConfig: SessionConfig;
    private sessionService: SessionService;

    constructor(
        private http: HttpClient,
        @Inject(SessionConfig) sessionConfig,
        @Inject(SessionService) sessionService) {
        this.sessionConfig = sessionConfig;
        this.sessionService = sessionService;
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(SessionService.get(SessionConfig.currentUser)));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }


    login(username: string, password: string) {
        return this.http.post<User>(`${environment.apiUrl}/account/authenticate`, {username, password})
            .pipe(map(user => {
                if (user && user.token) {
                    SessionService.set(SessionConfig.currentUser, JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;

            }));
    }

    forgot(username: string) {
        return this.http.post<User>(`${environment.apiUrl}/account/forgot`, {username})
            .pipe(map(user => {
                return user;
            }));
    }

    logout() {
        SessionService.remove(SessionConfig.currentUser);
        SessionService.clear();
        this.currentUserSubject.next(null);
    }


}
