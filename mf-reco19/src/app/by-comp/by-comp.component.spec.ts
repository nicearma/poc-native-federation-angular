import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCompComponent } from './by-comp.component';

describe('ByCompComponent', () => {
  let component: ByCompComponent;
  let fixture: ComponentFixture<ByCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
