import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarkFormComponent } from './remark-form.component';

describe('RemarkFormComponent', () => {
  let component: RemarkFormComponent;
  let fixture: ComponentFixture<RemarkFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemarkFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemarkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
