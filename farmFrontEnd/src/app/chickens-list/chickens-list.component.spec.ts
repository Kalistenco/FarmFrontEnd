import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickensListComponent } from './chickens-list.component';

describe('ChickensListComponent', () => {
  let component: ChickensListComponent;
  let fixture: ComponentFixture<ChickensListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChickensListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChickensListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
