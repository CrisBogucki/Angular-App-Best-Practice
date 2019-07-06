import {Injectable} from '@angular/core';

@Injectable()
export class AppConfig {

    constructor() {
        document.title = this.appName;
    }

    appName = 'ng8 app';
    appDescript = 'Angular 8.1.0';
    appVersion = '1.0.0';
    appCompany = 'cris bogucki';

}
