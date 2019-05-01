import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelregisterComponent } from './travelregister.component';

describe('TravelregisterComponent', () => {
  let component: TravelregisterComponent;
  let fixture: ComponentFixture<TravelregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
