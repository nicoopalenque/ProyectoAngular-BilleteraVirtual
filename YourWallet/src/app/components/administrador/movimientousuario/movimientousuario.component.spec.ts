import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientousuarioComponent } from './movimientousuario.component';

describe('MovimientousuarioComponent', () => {
  let component: MovimientousuarioComponent;
  let fixture: ComponentFixture<MovimientousuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimientousuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientousuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
