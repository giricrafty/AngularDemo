import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapTestComponentComponent } from './bootstrap-test-component.component';

describe('BootstrapTestComponentComponent', () => {
  let component: BootstrapTestComponentComponent;
  let fixture: ComponentFixture<BootstrapTestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapTestComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
