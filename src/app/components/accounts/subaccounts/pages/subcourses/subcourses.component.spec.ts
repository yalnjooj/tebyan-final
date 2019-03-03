import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcoursesComponent } from './subcourses.component';

describe('SubcoursesComponent', () => {
  let component: SubcoursesComponent;
  let fixture: ComponentFixture<SubcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
