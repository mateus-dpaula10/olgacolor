import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlastingComponent } from './blasting.component';

describe('BlastingComponent', () => {
  let component: BlastingComponent;
  let fixture: ComponentFixture<BlastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlastingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
