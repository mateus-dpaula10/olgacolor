import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrusionComponent } from './extrusion.component';

describe('ExtrusionComponent', () => {
  let component: ExtrusionComponent;
  let fixture: ComponentFixture<ExtrusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtrusionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtrusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
