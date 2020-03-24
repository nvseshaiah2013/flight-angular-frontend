import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelTicketSuccessComponent } from './cancel-ticket-success.component';

describe('CancelTicketSuccessComponent', () => {
  let component: CancelTicketSuccessComponent;
  let fixture: ComponentFixture<CancelTicketSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelTicketSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelTicketSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
