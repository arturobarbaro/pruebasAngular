import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicationInfoComponent } from './aplication-info.component';

describe('AplicationInfoComponent', () => {
  let component: AplicationInfoComponent;
  let fixture: ComponentFixture<AplicationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
