import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiyHuntsComponent } from './diy-hunts.component';

describe('DiyHuntsComponent', () => {
  let component: DiyHuntsComponent;
  let fixture: ComponentFixture<DiyHuntsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DiyHuntsComponent]
    });
    fixture = TestBed.createComponent(DiyHuntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
