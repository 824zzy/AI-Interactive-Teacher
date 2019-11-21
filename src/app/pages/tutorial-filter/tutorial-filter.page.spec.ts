import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialFilterPage } from './tutorial-filter.page';

describe('TutorialFilterPage', () => {
  let component: TutorialFilterPage;
  let fixture: ComponentFixture<TutorialFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialFilterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
