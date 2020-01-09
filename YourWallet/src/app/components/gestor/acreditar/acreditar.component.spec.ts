import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcreditarComponent } from './acreditar.component';

describe('AceditarComponent', () => {
  let component: AcreditarComponent;
  let fixture: ComponentFixture<AcreditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcreditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcreditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
