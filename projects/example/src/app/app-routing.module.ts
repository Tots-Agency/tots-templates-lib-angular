import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TotsComponentEditorPageComponent, TotsComponentEditorPageConfig } from 'projects/tots/templates-editor/src/public-api';

const routes: Routes = [
  { 
    path: 'editor/:template_id', 
    component: TotsComponentEditorPageComponent,
    data: {
      hasBackButton: true,
      backUrl: '/templates',
    } as TotsComponentEditorPageConfig
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
