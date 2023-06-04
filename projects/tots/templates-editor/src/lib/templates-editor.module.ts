import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/** Angular Material */
import { MatTabsModule } from '@angular/material/tabs';

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
    /** Others libraries */
    MatTabsModule,

    /** Others libraries */
    MonacoEditorModule.forRoot({})
  ],
  exports: [
    /** Pages */
    TotsComponentEditorPageComponent
  ]
})
export class TotsTemplatesEditorModule { }
