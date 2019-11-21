import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsPage } from './tutorials.page';

describe('TutorialsPage', () => {
  let component: TutorialsPage;
  let fixture: ComponentFixture<TutorialsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
