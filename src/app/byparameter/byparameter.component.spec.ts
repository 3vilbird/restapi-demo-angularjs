import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByparameterComponent } from './byparameter.component';

describe('ByparameterComponent', () => {
  let component: ByparameterComponent;
  let fixture: ComponentFixture<ByparameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByparameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByparameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
