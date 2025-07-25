import { bootstrapApplication } from '@angular/platform-browser';
import { generateAppConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { UrlMatcher } from '@angular/router';
import { generateRoutes } from './app/app.routes';

loadRemoteModule('mf-reco19', './urlMatcher').then((m) => {
  const urlMatcher: UrlMatcher = m.urlMatcher as UrlMatcher;
  const routes = generateRoutes(urlMatcher);
  const appConfig = generateAppConfig(routes);
  return bootstrapApplication(AppComponent, appConfig).catch((err) => {
    console.error(err);
    throw err;
  });
});
