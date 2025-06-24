import { Routes } from '@angular/router';
import {loadRemoteModule} from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'pdp',
    loadComponent: () =>
      loadRemoteModule('mf-pdp19', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'reco',
    loadComponent: () =>
      loadRemoteModule('mf-reco19', './Component').then((m) => m.AppComponent),
  },
];
