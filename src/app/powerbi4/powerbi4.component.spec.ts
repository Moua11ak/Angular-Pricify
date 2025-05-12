import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Powerbi4Component } from './powerbi4.component';

describe('Powerbi4Component', () => {
  let component: Powerbi4Component;
  let fixture: ComponentFixture<Powerbi4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Powerbi4Component]
    });
    fixture = TestBed.createComponent(Powerbi4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
