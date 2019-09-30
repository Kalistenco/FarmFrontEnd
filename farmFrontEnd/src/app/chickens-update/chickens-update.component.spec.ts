import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickensUpdateComponent } from './chickens-update.component';

describe('ChickensUpdateComponent', () => {
  let component: ChickensUpdateComponent;
  let fixture: ComponentFixture<ChickensUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChickensUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChickensUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
