import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarketsComponent } from './add-markets.component';

describe('AddMarketsComponent', () => {
  let component: AddMarketsComponent;
  let fixture: ComponentFixture<AddMarketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMarketsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
