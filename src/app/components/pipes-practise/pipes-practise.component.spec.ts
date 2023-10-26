import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesPractiseComponent } from './pipes-practise.component';

describe('PipesPractiseComponent', () => {
  let component: PipesPractiseComponent;
  let fixture: ComponentFixture<PipesPractiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesPractiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesPractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
