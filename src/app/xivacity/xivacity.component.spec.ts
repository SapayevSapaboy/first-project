import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XivacityComponent } from './xivacity.component';

describe('XivacityComponent', () => {
  let component: XivacityComponent;
  let fixture: ComponentFixture<XivacityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XivacityComponent]
    });
    fixture = TestBed.createComponent(XivacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
