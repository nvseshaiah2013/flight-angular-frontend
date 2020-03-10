import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedFlightComponent } from './selected-flight.component';

describe('SelectedFlightComponent', () => {
  let component: SelectedFlightComponent;
  let fixture: ComponentFixture<SelectedFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
