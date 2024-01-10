import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeYouDecideComponent } from './before-you-decide.component';

describe('BeforeYouDecideComponent', () => {
  let component: BeforeYouDecideComponent;
  let fixture: ComponentFixture<BeforeYouDecideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BeforeYouDecideComponent]
    });
    fixture = TestBed.createComponent(BeforeYouDecideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
