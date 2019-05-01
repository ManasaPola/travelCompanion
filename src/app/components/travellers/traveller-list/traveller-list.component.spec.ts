import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerListComponent } from './traveller-list.component';

describe('TravellerListComponent', () => {
  let component: TravellerListComponent;
  let fixture: ComponentFixture<TravellerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
