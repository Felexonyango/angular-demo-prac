import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SujectTest1Component } from './suject-test1.component';

describe('SujectTest1Component', () => {
  let component: SujectTest1Component;
  let fixture: ComponentFixture<SujectTest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SujectTest1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SujectTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
