import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VermovimientosComponent } from './vermovimientos.component';

describe('VermovimientosComponent', () => {
  let component: VermovimientosComponent;
  let fixture: ComponentFixture<VermovimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VermovimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VermovimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
