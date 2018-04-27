import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemuserComponent } from './themuser.component';

describe('ThemuserComponent', () => {
  let component: ThemuserComponent;
  let fixture: ComponentFixture<ThemuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
