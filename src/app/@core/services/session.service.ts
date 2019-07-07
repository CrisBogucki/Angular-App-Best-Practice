import {environment} from '../../../environments/environment';

export class SessionService {

    static sessions = [];

    constructor() {
    }

    public static set(key: string, value: string): void {
        if (environment.useLocalStorage) {
            localStorage.setItem(key, value);
        } else {
            const o = {key, value};
            this.sessions.push(o);
        }
    }

    public static get(key: string): string {
        if (environment.useLocalStorage) {
            return localStorage.getItem(key);
        } else {
            const obj = this.sessions.find(el => el.key === key);
            if (obj === undefined) {
                return null;
            }
            return obj;
        }
    }

    public static remove(key: string): void {
        if (environment.useLocalStorage) {
            localStorage.removeItem(key);
        } else {
            const obj = this.sessions.find(el => el.key === key);
            this.sessions.splice(obj);
        }
    }

    public static clear(): void {
        if (environment.useLocalStorage) {
            localStorage.clear();
        } else {
            this.sessions = [];
        }
    }
}
