import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedoresListComponent } from './vendedores-list.component';

describe('VendedoresListComponent', () => {
  let component: VendedoresListComponent;
  let fixture: ComponentFixture<VendedoresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedoresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
