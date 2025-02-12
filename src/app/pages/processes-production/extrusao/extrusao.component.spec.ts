import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrusaoComponent } from './extrusao.component';

describe('ExtrusaoComponent', () => {
  let component: ExtrusaoComponent;
  let fixture: ComponentFixture<ExtrusaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtrusaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtrusaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
