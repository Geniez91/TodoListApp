import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidTaskComponent } from './valid-task.component';

describe('ValidTaskComponent', () => {
  let component: ValidTaskComponent;
  let fixture: ComponentFixture<ValidTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidTaskComponent]
    });
    fixture = TestBed.createComponent(ValidTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
