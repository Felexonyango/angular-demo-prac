import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyPipeComponent } from './asy-pipe.component';

describe('AsyPipeComponent', () => {
  let component: AsyPipeComponent;
  let fixture: ComponentFixture<AsyPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
