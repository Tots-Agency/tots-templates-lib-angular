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
  isSending = false;

  constructor(
    protected route: ActivatedRoute,
    protected templateService: TotsTemplatesService,
    protected componentService: TotsComponentService,
    protected router: Router,
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  onCreate() {
    this.isSending = true;
    this.componentService.create(this.component)
    .pipe(tap(component => this.component.id = component.id))
    .pipe(tap(() => this.isSending = false))
    .subscribe();
  }

  onUpdate() {
    this.isSending = true;
    this.componentService.update(this.component)
    .pipe(tap(() => this.isSending = false))
    .subscribe();
  }

  onClickSave() {
    if(this.component.id == undefined || this.component.id <= 0){
      this.onCreate();
    } else {
      this.onUpdate();
    }
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
      this.component.title = 'New Component';
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
