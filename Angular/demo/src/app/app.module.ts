import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { PaletteComponent } from './components/color-picker/palette/palette.comonent';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColorPickerComponent,
    PaletteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
