import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mf-pdp-empty',
  templateUrl: './empty.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyComponent {}
