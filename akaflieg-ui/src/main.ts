import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';
import {AppModule} from './app/app.module';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(function () {
        if (!environment.production) {
            console.log('bootstrapping app successful')
        }
    })
    .catch(function () {
        if (!environment.production) {
            console.log('bootstrapping app failed')
        }
    });
