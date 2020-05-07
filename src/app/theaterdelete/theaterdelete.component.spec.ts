import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterdeleteComponent } from './theaterdelete.component';

describe('TheaterdeleteComponent', () => {
  let component: TheaterdeleteComponent;
  let fixture: ComponentFixture<TheaterdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheaterdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheaterdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
