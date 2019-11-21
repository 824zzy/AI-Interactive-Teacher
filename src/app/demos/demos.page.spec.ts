import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosPage } from './demos.page';

describe('DemosPage', () => {
  let component: DemosPage;
  let fixture: ComponentFixture<DemosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
