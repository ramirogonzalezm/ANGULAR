import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamiroComponent } from './ramiro.component';

describe('RamiroComponent', () => {
  let component: RamiroComponent;
  let fixture: ComponentFixture<RamiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
