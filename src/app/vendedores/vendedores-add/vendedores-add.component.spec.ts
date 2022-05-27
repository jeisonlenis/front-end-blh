import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedoresAddComponent } from './vendedores-add.component';

describe('VendedoresAddComponent', () => {
  let component: VendedoresAddComponent;
  let fixture: ComponentFixture<VendedoresAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedoresAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedoresAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
