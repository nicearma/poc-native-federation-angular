import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ViewContainerRef} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {loadRemoteModule} from '@angular-architects/native-federation';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements AfterViewInit {
  title = 'mf-pdp19';

  @ViewChild('placeholder', {read: ViewContainerRef})
  viewContainerRef!: ViewContainerRef;

  constructor() {
    console.log('Attempting to load custom element from mf-reco19');
    // We'll leave this commented to avoid the error and focus on making createComponent work first
    //
  }

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

  async ngAfterViewInit() {
      this.loadCustomElement();

      const remove = await loadRemoteModule('mf-reco19',
        './ByComp',
      );

      const comp = this.viewContainerRef.createComponent(remove.ByCompComponent, {});
      comp.setInput('name', 'BY_COMP');

  }
}
