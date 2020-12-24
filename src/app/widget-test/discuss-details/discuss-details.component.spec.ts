import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussDetailsComponent } from './discuss-details.component';

describe('DiscussDetailsComponent', () => {
  let component: DiscussDetailsComponent;
  let fixture: ComponentFixture<DiscussDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
