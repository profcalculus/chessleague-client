import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamelinkComponent } from './namelink.component';

describe('NamelinkComponent', () => {
  let component: NamelinkComponent;
  let fixture: ComponentFixture<NamelinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamelinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamelinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
