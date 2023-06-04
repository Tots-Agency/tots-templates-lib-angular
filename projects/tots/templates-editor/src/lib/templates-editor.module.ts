import { NgModule } from '@angular/core';

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
    MonacoEditorModule.forRoot({})
  ],
  exports: [
    /** Pages */
    TotsComponentEditorPageComponent
  ]
})
export class TotsTemplatesEditorModule { }
