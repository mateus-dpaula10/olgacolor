import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishesComponent } from './finishes.component';

describe('FinishesComponent', () => {
  let component: FinishesComponent;
  let fixture: ComponentFixture<FinishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinishesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
