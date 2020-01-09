import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitarComponent } from './debitar.component';

describe('DebitarComponent', () => {
  let component: DebitarComponent;
  let fixture: ComponentFixture<DebitarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
