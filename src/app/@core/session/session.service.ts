import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    constructor() {
    }

    // Set session value by key
    public static set(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    // Get value by session by key
    public static get(key: string): string {
        return localStorage.getItem(key);
    }

    // Remove session value by key
    public static remove(key: string): void {
        localStorage.removeItem(key);
    }

    // Clear all session objects
    public static clear(): void {
        localStorage.clear();
    }
}
