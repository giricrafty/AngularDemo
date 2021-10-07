package com.parser;

public class Constants {
   public static String defaultTsFile="import { Component } from '@angular/core';\r\n"
   		+ "\r\n"
   		+ "@Component({\r\n"
   		+ "  selector: 'app-root',\r\n"
   		+ "  templateUrl: './app.component.html',\r\n"
   		+ "  styleUrls: ['./app.component.css']\r\n"
   		+ "})\r\n"
   		+ "export class AppComponent {\r\n"
   		+ "  title = 'check';\r\n";
   		
    public static String defaultSpecFile="import { TestBed } from '@angular/core/testing';\r\n"
    		+ "import { RouterTestingModule } from '@angular/router/testing';\r\n"
    		+ "import { AppComponent } from './app.component';\r\n"
    		+ "import { fakeAsync, tick } from '@angular/core/testing';\r\n"
    		+ "import {By} from '@angular/platform-browser';\r\n"
    		+ "\r\n"
    		+ "describe('AppComponent', () => {\r\n"
    		+ "  beforeEach(async () => {\r\n"
    		+ "    await TestBed.configureTestingModule({\r\n"
    		+ "      imports: [\r\n"
    		+ "        RouterTestingModule\r\n"
    		+ "      ],\r\n"
    		+ "      declarations: [\r\n"
    		+ "        AppComponent\r\n"
    		+ "      ],\r\n"
    		+ "    }).compileComponents();\r\n"
    		+ "  });\r\n"
    		+ "\r\n"
    		+ "  it('should create the app', () => {\r\n"
    		+ "    const fixture = TestBed.createComponent(AppComponent);\r\n"
    		+ "    const app = fixture.componentInstance;\r\n"
    		+ "    expect(app).toBeTruthy();\r\n"
    		+ "  });\r\n"
    		+ "\r\n"
    		+ "  it(`should have as title 'check'`, () => {\r\n"
    		+ "    const fixture = TestBed.createComponent(AppComponent);\r\n"
    		+ "    const app = fixture.componentInstance;\r\n"
    		+ "    expect(app.title).toEqual('check');\r\n"
    		+ "  });\r\n"
    		+ "\r\n"
    		+ "  it('should render title', () => {\r\n"
    		+ "    const fixture = TestBed.createComponent(AppComponent);\r\n"
    		+ "    fixture.detectChanges();\r\n"
    		+ "    const compiled = fixture.nativeElement as HTMLElement;\r\n"
    		+ "    expect(compiled.querySelector('.content span')?.textContent).toContain('check app is running!');\r\n"
    		+ "  });\r\n";
            public static String closeSpecFile="})";
            public static String closeTsFile="}";

}
