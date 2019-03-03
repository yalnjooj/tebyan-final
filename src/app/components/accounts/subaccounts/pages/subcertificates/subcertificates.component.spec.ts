import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcertificatesComponent } from './subcertificates.component';

describe('SubcertificatesComponent', () => {
  let component: SubcertificatesComponent;
  let fixture: ComponentFixture<SubcertificatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcertificatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
