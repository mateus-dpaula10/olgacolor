import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlgacolorComponent } from './olgacolor.component';

describe('OlgacolorComponent', () => {
  let component: OlgacolorComponent;
  let fixture: ComponentFixture<OlgacolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OlgacolorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlgacolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
