import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlazingComponent } from './glazing.component';

describe('GlazingComponent', () => {
  let component: GlazingComponent;
  let fixture: ComponentFixture<GlazingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlazingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlazingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
