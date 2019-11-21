import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalLanguageProcessingPage } from './natural-language-processing.page';

describe('NaturalLanguageProcessingPage', () => {
  let component: NaturalLanguageProcessingPage;
  let fixture: ComponentFixture<NaturalLanguageProcessingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalLanguageProcessingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalLanguageProcessingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
