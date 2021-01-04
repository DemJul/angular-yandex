import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifEmailComponent } from './notif-email.component';

describe('NotifEmailComponent', () => {
  let component: NotifEmailComponent;
  let fixture: ComponentFixture<NotifEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
