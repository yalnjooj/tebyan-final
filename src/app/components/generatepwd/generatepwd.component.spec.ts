import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratepwdComponent } from './generatepwd.component';

describe('GeneratepwdComponent', () => {
  let component: GeneratepwdComponent;
  let fixture: ComponentFixture<GeneratepwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratepwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratepwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
