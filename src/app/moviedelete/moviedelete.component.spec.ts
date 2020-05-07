import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedeleteComponent } from './moviedelete.component';

describe('MoviedeleteComponent', () => {
  let component: MoviedeleteComponent;
  let fixture: ComponentFixture<MoviedeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviedeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviedeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
