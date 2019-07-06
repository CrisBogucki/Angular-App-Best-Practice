import {Injectable} from '@angular/core';

@Injectable()
export class AppConfig {

    constructor() {
        document.title = this.appName;
    }

    appName = 'Welcome to Angular App';
    appDescript = 'by Angular 8.1.0';
    appVersion = '1.01.001';
    appCompany = 'cris bogucki';

}
