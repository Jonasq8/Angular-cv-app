import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpericenceCardComponent } from './expericence-card.component';

describe('ExpericenceCardComponent', () => {
  let component: ExpericenceCardComponent;
  let fixture: ComponentFixture<ExpericenceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpericenceCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpericenceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
