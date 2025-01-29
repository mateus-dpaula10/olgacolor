import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividingLineComponent } from './dividing-line.component';

describe('DividingLineComponent', () => {
  let component: DividingLineComponent;
  let fixture: ComponentFixture<DividingLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividingLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividingLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
