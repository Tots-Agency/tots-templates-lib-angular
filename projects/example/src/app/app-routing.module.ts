import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TotsComponentEditorPageComponent } from 'projects/tots/templates-editor/src/public-api';

const routes: Routes = [
  { path: 'editor', component: TotsComponentEditorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
