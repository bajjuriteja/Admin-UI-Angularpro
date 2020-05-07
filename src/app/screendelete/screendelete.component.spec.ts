import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreendeleteComponent } from './screendelete.component';

describe('ScreendeleteComponent', () => {
  let component: ScreendeleteComponent;
  let fixture: ComponentFixture<ScreendeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreendeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreendeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
