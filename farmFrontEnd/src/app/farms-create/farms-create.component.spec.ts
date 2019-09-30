import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmsCreateComponent } from './farms-create.component';

describe('FarmsCreateComponent', () => {
  let component: FarmsCreateComponent;
  let fixture: ComponentFixture<FarmsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
