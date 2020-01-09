import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogingestorComponent } from './logingestor.component';

describe('LogingestorComponent', () => {
  let component: LogingestorComponent;
  let fixture: ComponentFixture<LogingestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogingestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogingestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
