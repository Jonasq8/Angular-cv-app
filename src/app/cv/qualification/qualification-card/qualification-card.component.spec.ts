import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationCardComponent } from './qualification-card.component';

describe('QualificationCardComponent', () => {
  let component: QualificationCardComponent;
  let fixture: ComponentFixture<QualificationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QualificationCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualificationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
