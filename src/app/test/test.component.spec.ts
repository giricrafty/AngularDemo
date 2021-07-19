import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
//Spec functionality for keyup Event: 

it('should be input identification', () => { const fixture = TestBed.createComponent(TestComponent)
  const component = fixture.componentInstance
   fakeAsync(() => { spyOn(component, 'onKey')
  fixture.detectChanges()
   const input = fixture.debugElement.query(By.css('input'))
  input.nativeElement.keyup()
   tick()
  expect(component.onKey).toHaveBeenCalled()
  }) })
 
 // Spec functionality for change Event: 
 
 it('should be input identification', () => { const fixture = TestBed.createComponent(TestComponent)
  const component = fixture.componentInstance
   fakeAsync(() => { spyOn(component, 'onChange')
  fixture.detectChanges()
   const input = fixture.debugElement.query(By.css('input'))
  input.nativeElement.change()
  tick()
  expect(component.onChange).toHaveBeenCalled()
  }) })
 
 // Spec functionality for keyupenter Event: 
 
 it('should be input identification', () => { const fixture = TestBed.createComponent(TestComponent)
  const component = fixture.componentInstance
   fakeAsync(() => { spyOn(component, 'onKeyEnter')
  fixture.detectChanges()
   const input = fixture.debugElement.query(By.css('input'))
  input.nativeElement.keyupenter()
   tick()
  expect(component.onKeyEnter).toHaveBeenCalled()
  }) })
 
 // Spec functionality for blur Event: 
 
 it('should be input identification', () => { const fixture = TestBed.createComponent(TestComponent)
  const component = fixture.componentInstance
   fakeAsync(() => { spyOn(component, 'onBlur')
  fixture.detectChanges()
   const input = fixture.debugElement.query(By.css('input'))
  input.nativeElement.blur()
  tick()
  expect(component.onBlur).toHaveBeenCalled()
  }) })
})