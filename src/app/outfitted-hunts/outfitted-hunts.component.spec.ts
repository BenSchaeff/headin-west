import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfittedHuntsComponent } from './outfitted-hunts.component';

describe('OutfittedHuntsComponent', () => {
  let component: OutfittedHuntsComponent;
  let fixture: ComponentFixture<OutfittedHuntsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OutfittedHuntsComponent]
    });
    fixture = TestBed.createComponent(OutfittedHuntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
