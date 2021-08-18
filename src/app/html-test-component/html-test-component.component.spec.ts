import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlTestComponentComponent } from './html-test-component.component';

describe('HtmlTestComponentComponent', () => {
  let component: HtmlTestComponentComponent;
  let fixture: ComponentFixture<HtmlTestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlTestComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
