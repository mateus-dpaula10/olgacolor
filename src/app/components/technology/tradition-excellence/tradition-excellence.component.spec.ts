import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionExcellenceComponent } from './tradition-excellence.component';

describe('TraditionExcellenceComponent', () => {
  let component: TraditionExcellenceComponent;
  let fixture: ComponentFixture<TraditionExcellenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraditionExcellenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraditionExcellenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
