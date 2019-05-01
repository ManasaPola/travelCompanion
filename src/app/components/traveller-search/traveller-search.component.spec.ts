import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerSearchComponent } from './traveller-search.component';

describe('TravellerSearchComponent', () => {
  let component: TravellerSearchComponent;
  let fixture: ComponentFixture<TravellerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
