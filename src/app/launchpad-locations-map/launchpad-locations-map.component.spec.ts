import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchpadLocationsMapComponent } from './launchpad-locations-map.component';

describe('LaunchpadLocationsMapComponent', () => {
  let component: LaunchpadLocationsMapComponent;
  let fixture: ComponentFixture<LaunchpadLocationsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchpadLocationsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchpadLocationsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
