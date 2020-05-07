import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdeleteComponent } from './showdelete.component';

describe('ShowdeleteComponent', () => {
  let component: ShowdeleteComponent;
  let fixture: ComponentFixture<ShowdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
