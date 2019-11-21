import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerVisionPage } from './computer-vision.page';

describe('ComputerVisionPage', () => {
  let component: ComputerVisionPage;
  let fixture: ComponentFixture<ComputerVisionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerVisionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerVisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
