import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {importProvidersFrom} from '@angular/core';
import {provideAnimations} from '@angular/platform-browser/animations';
import {createCustomElement} from '@angular/elements';
import {ByTagComponent} from './by-tag/by-tag.component';

bootstrapApplication(ByTagComponent, {
  providers: [importProvidersFrom(BrowserModule), provideAnimations()],
}).then(ref => {
  const injector = ref.injector;
  const el = createCustomElement(ByTagComponent, { injector });
  customElements.define('my-by-tag', el);
});
