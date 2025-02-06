import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessesProductionComponent } from './processes-production.component';

describe('ProcessesProductionComponent', () => {
  let component: ProcessesProductionComponent;
  let fixture: ComponentFixture<ProcessesProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessesProductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessesProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
