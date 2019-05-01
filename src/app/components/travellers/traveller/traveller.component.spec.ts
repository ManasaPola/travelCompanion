import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerComponent } from './traveller.component';

describe('TravellerComponent', () => {
  let component: TravellerComponent;
  let fixture: ComponentFixture<TravellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
