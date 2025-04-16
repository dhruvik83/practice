import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Temp1Component } from './temp1.component';

describe('Temp1Component', () => {
  let component: Temp1Component;
  let fixture: ComponentFixture<Temp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Temp1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Temp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
