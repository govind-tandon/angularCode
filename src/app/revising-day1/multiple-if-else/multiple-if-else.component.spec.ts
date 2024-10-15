import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleIfElseComponent } from './multiple-if-else.component';

describe('MultipleIfElseComponent', () => {
  let component: MultipleIfElseComponent;
  let fixture: ComponentFixture<MultipleIfElseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleIfElseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleIfElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
