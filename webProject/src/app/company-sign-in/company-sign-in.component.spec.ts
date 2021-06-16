import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySignInComponent } from './company-sign-in.component';

describe('CompanySignInComponent', () => {
  let component: CompanySignInComponent;
  let fixture: ComponentFixture<CompanySignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
