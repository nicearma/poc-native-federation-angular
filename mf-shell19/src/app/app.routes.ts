import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { EmptyComponent } from '../components/empty/empty.component';

export const routes: Routes = [
  {
    path: 'pdp',
    loadChildren: () =>
      loadRemoteModule('mf-pdp19', './PdpRoutes').then((m) => m.routes),
  },
  {
    path: 'reco',
    loadComponent: () =>
      loadRemoteModule('mf-reco19', './Component').then((m) => m.AppComponent),
  },
  {
    path: '**',
    component: EmptyComponent,
  },
];
