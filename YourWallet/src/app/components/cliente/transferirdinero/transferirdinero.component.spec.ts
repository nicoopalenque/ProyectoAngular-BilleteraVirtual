import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferirdineroComponent } from './transferirdinero.component';

describe('TransferirdineroComponent', () => {
  let component: TransferirdineroComponent;
  let fixture: ComponentFixture<TransferirdineroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferirdineroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferirdineroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
