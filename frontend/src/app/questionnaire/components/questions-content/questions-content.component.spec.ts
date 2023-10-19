import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsContentComponent } from './questions-content.component';

describe('QuestionsContentComponent', () => {
  let component: QuestionsContentComponent;
  let fixture: ComponentFixture<QuestionsContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsContentComponent]
    });
    fixture = TestBed.createComponent(QuestionsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
