import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnodizingComponent } from './anodizing.component';

describe('AnodizingComponent', () => {
  let component: AnodizingComponent;
  let fixture: ComponentFixture<AnodizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnodizingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnodizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
