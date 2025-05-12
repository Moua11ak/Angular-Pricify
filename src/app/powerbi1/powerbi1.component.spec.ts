import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Powerbi1Component } from './powerbi1.component';

describe('Powerbi1Component', () => {
  let component: Powerbi1Component;
  let fixture: ComponentFixture<Powerbi1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Powerbi1Component]
    });
    fixture = TestBed.createComponent(Powerbi1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
