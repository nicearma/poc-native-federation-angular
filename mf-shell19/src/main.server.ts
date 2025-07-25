import { bootstrapApplication } from '@angular/platform-browser';
import { generateAppServerConfig } from './app/app.config.server';
import { AppComponent } from './app/app.component';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { UrlMatcher } from '@angular/router';
import { generateRoutes } from './app/app.routes';

const bootstrap = async () => {
  console.log('loading mf-reco in server');
  try {
    const matcherModule = await loadRemoteModule('mf-reco19', './urlMatcher');
    const urlMatcher: UrlMatcher = matcherModule.urlMatcher as UrlMatcher;
    const routes = generateRoutes(urlMatcher);
    const appConfig = generateAppServerConfig(routes);
    return bootstrapApplication(AppComponent, appConfig).catch((err) => {
      console.error(err);
      throw err;
    });
  } catch (err) {
    console.error('Error loading', err);
    throw err;
  }
};
export default bootstrap;
