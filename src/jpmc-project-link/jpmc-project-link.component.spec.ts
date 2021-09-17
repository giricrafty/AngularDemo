import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JpmcProjectLinkComponent } from './jpmc-project-link.component';

describe('JpmcProjectLinkComponent', () => {
  let component: JpmcProjectLinkComponent;
  let fixture: ComponentFixture<JpmcProjectLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JpmcProjectLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JpmcProjectLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
