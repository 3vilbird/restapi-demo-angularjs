import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletingComponent } from './deleting.component';

describe('DeletingComponent', () => {
  let component: DeletingComponent;
  let fixture: ComponentFixture<DeletingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
