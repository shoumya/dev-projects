import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchOverTimeComponent } from './launch-over-time.component';

describe('LaunchOverTimeComponent', () => {
  let component: LaunchOverTimeComponent;
  let fixture: ComponentFixture<LaunchOverTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchOverTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchOverTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
