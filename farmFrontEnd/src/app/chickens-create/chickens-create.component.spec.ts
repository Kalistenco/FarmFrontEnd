import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickensCreateComponent } from './chickens-create.component';

describe('ChickensCreateComponent', () => {
  let component: ChickensCreateComponent;
  let fixture: ComponentFixture<ChickensCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChickensCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChickensCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
