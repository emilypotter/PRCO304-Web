import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MswComponent } from './msw.component';

describe('MswComponent', () => {
  let component: MswComponent;
  let fixture: ComponentFixture<MswComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MswComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
