import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarusuariosComponent } from './buscarusuarios.component';

describe('BuscarusuariosComponent', () => {
  let component: BuscarusuariosComponent;
  let fixture: ComponentFixture<BuscarusuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarusuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
