import { loadRemoteModule } from '@angular-architects/native-federation';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'mf-pdp-page1',
  templateUrl: './page1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page1Component implements AfterViewInit {
  @ViewChild('recoComponent', { read: ViewContainerRef })
  viewContainerRef!: ViewContainerRef;
  async ngAfterViewInit() {
    const remove = await loadRemoteModule('mf-reco19', './ByComp');

    const comp = this.viewContainerRef.createComponent(
      remove.ByCompComponent,
      {}
    );
    comp.setInput('name', 'Page 1');
  }
  interactive = false;

  testInteractivity() {
    this.interactive = true;
  }
}
