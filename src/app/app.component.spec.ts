import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { By } from '@angular/platform-browser';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'CommonModule'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('CommonModule');
  });

  it('check for click event', async() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fakeAsync(() => {
      spyOn(component, 'clickFunction');
      let button = fixture.debugElement.query(By.css('button'));
      button.triggerEventHandler('click', null);
      tick();
      expect(component.clickFunction).toHaveBeenCalled();
    })
  })

  it('button enable disable testcase', ()=> {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component.checkButton).toBe(false);
    component.clickFunction();
    fixture.detectChanges();
    expect(component.checkButton).toBe(true);
  })
});
