import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotsTemplatesEditorModule } from 'projects/tots/templates-editor/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    TotsTemplatesEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
