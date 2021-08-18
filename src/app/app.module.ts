import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
//material imports
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav'


import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';


import {MatIconModule } from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper'
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';  
import { MatDividerModule } from '@angular/material/divider';
import { HtmlTestComponentComponent } from './html-test-component/html-test-component.component';
import { BootstrapTestComponentComponent } from './bootstrap-test-component/bootstrap-test-component.component';
import { ControllersComponent } from './controllers/controllers.component';
import { HeaderComponent } from './header/header.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HtmlTestComponentComponent,
    BootstrapTestComponentComponent,
    ControllersComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // material import start
    MatProgressBarModule,
    MatInputModule,
    MatExpansionModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatTableModule,
    MatSliderModule,
    MatDatepickerModule,
    MatRadioModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatListModule,
    MatSelectModule,
    MatButtonModule,
    MatTabsModule,
    // MatIconModule,
    MatMenuModule
    // material import end
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ] 
})
export class AppModule { }
