import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureLineComponent } from './furniture-line.component';

describe('FurnitureLineComponent', () => {
  let component: FurnitureLineComponent;
  let fixture: ComponentFixture<FurnitureLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FurnitureLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnitureLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
