import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedemoComponent } from './createdemo.component';

describe('CreatedemoComponent', () => {
  let component: CreatedemoComponent;
  let fixture: ComponentFixture<CreatedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
