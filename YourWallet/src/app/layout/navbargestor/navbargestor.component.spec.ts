import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbargestorComponent } from './navbargestor.component';

describe('NavbargestorComponent', () => {
  let component: NavbargestorComponent;
  let fixture: ComponentFixture<NavbargestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbargestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbargestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
