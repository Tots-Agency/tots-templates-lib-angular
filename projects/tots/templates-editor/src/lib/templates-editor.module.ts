import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/** Angular Material */
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

/** Others libraries */
import { MonacoEditorModule } from '@tots/ngx-monaco-editor-v2';

/** Pages */
import { TotsComponentEditorPageComponent } from './pages/component-editor-page/component-editor-page.component';

@NgModule({
  declarations: [
    
    /** Pages */
    TotsComponentEditorPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    /** Angular Material */
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,

    /** Others libraries */
    MonacoEditorModule.forRoot({})
  ],
  exports: [
    /** Pages */
    TotsComponentEditorPageComponent
  ]
})
export class TotsTemplatesEditorModule { }
