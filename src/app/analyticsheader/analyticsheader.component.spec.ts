import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsheaderComponent } from './analyticsheader.component';

describe('AnalyticsheaderComponent', () => {
  let component: AnalyticsheaderComponent;
  let fixture: ComponentFixture<AnalyticsheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
