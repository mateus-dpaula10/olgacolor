import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialLineComponent } from './industrial-line.component';

describe('IndustrialLineComponent', () => {
  let component: IndustrialLineComponent;
  let fixture: ComponentFixture<IndustrialLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustrialLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustrialLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
