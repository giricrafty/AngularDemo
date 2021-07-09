import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//material imports
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/layout/header/header.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { AppLayoutComponent } from './component/layout/app-layout/app-layout.component';
import { ListModuleComponent } from './component/list-module/list-module.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AppLayoutComponent,
    ListModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // material import start
    MatSliderModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatButtonModule
    // material import end
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
