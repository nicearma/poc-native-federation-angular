import { loadRemoteModule } from '@angular-architects/native-federation';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'mf-pdp-page2',
  templateUrl: './page2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page2Component implements AfterViewInit {
  @ViewChild('recoComponent', { read: ViewContainerRef })
  viewContainerRef!: ViewContainerRef;
  comp: ComponentRef<unknown> | null = null;

  async ngAfterViewInit() {
    const reco = await loadRemoteModule('mf-reco19', './ByComp');

    this.comp = this.viewContainerRef.createComponent(reco.ByCompComponent, {});
    this.comp.setInput('name', 'Page 2');
  }

  changeReco() {
    if (this.comp) {
      this.comp.setInput('name', 'Page 2 updated reco');
    }
  }
}
