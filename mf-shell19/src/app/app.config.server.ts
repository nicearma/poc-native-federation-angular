import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { generateAppConfig } from './app.config';
import { Routes } from '@angular/router';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering()],
};

export const generateAppServerConfig = (routes: Routes) =>
  mergeApplicationConfig(generateAppConfig(routes), serverConfig);
