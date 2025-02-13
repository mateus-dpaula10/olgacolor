import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachiningComponent } from './machining.component';

describe('MachiningComponent', () => {
  let component: MachiningComponent;
  let fixture: ComponentFixture<MachiningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachiningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
