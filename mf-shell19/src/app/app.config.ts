import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes, withDebugTracing } from '@angular/router';

// import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

export const generateAppConfig: (routes: Routes) => ApplicationConfig = (
  routes
) => {
  return {
    providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes, withDebugTracing()),
      provideClientHydration(withEventReplay()),
    ],
  };
};
