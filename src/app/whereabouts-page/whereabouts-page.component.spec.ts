import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereaboutsPageComponent } from './whereabouts-page.component';

describe('WhereaboutsPageComponent', () => {
  let component: WhereaboutsPageComponent;
  let fixture: ComponentFixture<WhereaboutsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhereaboutsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereaboutsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
