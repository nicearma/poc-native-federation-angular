import { Routes } from '@angular/router';
import {loadRemoteModule} from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'reco',
    loadComponent: () =>
      loadRemoteModule('mf-reco19', './Component').then((m) => m.AppComponent),
  }, {
    path: 'pdp',
    loadChildren: () =>
      loadRemoteModule('mf-pdp19', './MfPdpRoutedModule').then((m) => m.MfPdpRoutedModule),
  },
];
