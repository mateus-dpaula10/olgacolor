import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmeComponent } from './lme.component';

describe('LmeComponent', () => {
  let component: LmeComponent;
  let fixture: ComponentFixture<LmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LmeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
