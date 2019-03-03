import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubordersComponent } from './suborders.component';

describe('SubordersComponent', () => {
  let component: SubordersComponent;
  let fixture: ComponentFixture<SubordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
