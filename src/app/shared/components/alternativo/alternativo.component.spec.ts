import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativoComponent } from './alternativo.component';

describe('AlternativoComponent', () => {
  let component: AlternativoComponent;
  let fixture: ComponentFixture<AlternativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlternativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
