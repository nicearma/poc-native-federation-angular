import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'mf-pdp19';

  @ViewChild('reco-component', { read: ViewContainerRef })
  viewContainerRef!: ViewContainerRef;

  async loadCustomElement() {
    try {
      console.log('Starting loadCustomElement()');
      // Import the Native module which registers the custom element
      await loadRemoteModule('mf-reco19', './Native');
      console.log('Custom element module loaded successfully');
    } catch (error) {
      console.error('Error loading custom element:', error);
    }
  }
}
