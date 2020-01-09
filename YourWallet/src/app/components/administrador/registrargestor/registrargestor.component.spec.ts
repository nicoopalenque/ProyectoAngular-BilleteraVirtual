import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrargestorComponent } from './registrargestor.component';

describe('RegistrargestorComponent', () => {
  let component: RegistrargestorComponent;
  let fixture: ComponentFixture<RegistrargestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrargestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrargestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
