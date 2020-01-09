import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientogestorComponent } from './movimientogestor.component';

describe('MovimientogestorComponent', () => {
  let component: MovimientogestorComponent;
  let fixture: ComponentFixture<MovimientogestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimientogestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientogestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
