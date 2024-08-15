import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSharedComponent } from './ng-shared.component';

describe('NgSharedComponent', () => {
  let component: NgSharedComponent;
  let fixture: ComponentFixture<NgSharedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgSharedComponent]
    });
    fixture = TestBed.createComponent(NgSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
