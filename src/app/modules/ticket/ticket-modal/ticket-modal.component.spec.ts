import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketModalComponent } from './ticket-modal.component';

describe('TicketModalComponent', () => {
  let component: TicketModalComponent;
  let fixture: ComponentFixture<TicketModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
