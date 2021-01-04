import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WthTrafComponent } from './wth-traf.component';

describe('WthTrafComponent', () => {
  let component: WthTrafComponent;
  let fixture: ComponentFixture<WthTrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WthTrafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WthTrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
