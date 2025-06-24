import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {loadRemoteModule} from '@angular-architects/native-federation';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'reco',
        loadComponent: () =>
          loadRemoteModule('mf-reco19', './Component').then((m) => m.AppComponent),
      },
    ],

  },
  {
    path: 'pdp/reco',
    loadComponent: () =>
      loadRemoteModule('mf-reco19', './Component').then((m) => m.AppComponent),
  },


];


@NgModule({
  imports: [AppComponent, RouterModule.forChild(routes)],
})
export class MfPdpRoutedModule {
}
