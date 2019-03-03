import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatasComponent } from './certificatas.component';

describe('CertificatasComponent', () => {
  let component: CertificatasComponent;
  let fixture: ComponentFixture<CertificatasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificatasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
