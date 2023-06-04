import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TotsComponent, TotsComponentService, TotsTemplatesService } from '@tots/templates-core';
import { TotsComponentEditorPageConfig } from '../../entities/tots_component_editor_page_config';
import { switchMap, tap } from 'rxjs';
import { Params } from '@angular/router';

@Component({
  selector: 'tots-component-editor-page',
  templateUrl: './component-editor-page.component.html',
  styleUrls: ['./component-editor-page.component.css']
})
export class TotsComponentEditorPageComponent implements OnInit {

  config!: TotsComponentEditorPageConfig;

  htmlEditor = {theme: 'vs-dark', language: 'html'};
  cssEditor = {theme: 'vs-dark', language: 'css'};
  jsEditor = {theme: 'vs-dark', language: 'js'};

  component = new TotsComponent();

  isLoading = false;

  constructor(
    protected route: ActivatedRoute,
    protected templateService: TotsTemplatesService,
    protected componentService: TotsComponentService,
    protected router: Router,
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  onClickBack() {
    this.router.navigateByUrl('/templates');
  }

  loadComponent(componentId: any) {
    this.isLoading = true;
    this.componentService.fetchById(componentId)
    .pipe(tap(component => this.component = component))
    .pipe(tap(() => this.isLoading = false))
    .subscribe();
  }

  loadParams(params: Params) {
    if(params['template_id'] == undefined){
      throw 'Not exist template';
    }

    this.templateService.setTemplateCurrentId(params['template_id']);

    if(params['id'] == undefined){
      return;
    }

    this.loadComponent(params['id']);
  }

  loadConfig() {
    this.route.data
    .pipe(switchMap(data => {
      this.config = data as TotsComponentEditorPageConfig;
      return this.route.params;
    }))
    .subscribe(params => this.loadParams(params));
  }
}
