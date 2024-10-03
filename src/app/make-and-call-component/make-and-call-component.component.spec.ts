import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeAndCallComponentComponent } from './make-and-call-component.component';

describe('MakeAndCallComponentComponent', () => {
  let component: MakeAndCallComponentComponent;
  let fixture: ComponentFixture<MakeAndCallComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeAndCallComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeAndCallComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
