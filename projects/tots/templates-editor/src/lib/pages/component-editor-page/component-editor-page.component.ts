import { Component, OnInit } from '@angular/core';
import { TotsComponent } from '@tots/templates-core';

@Component({
  selector: 'tots-component-editor-page',
  templateUrl: './component-editor-page.component.html',
  styleUrls: ['./component-editor-page.component.css']
})
export class TotsComponentEditorPageComponent implements OnInit {

  htmlEditor = {theme: 'vs-dark', language: 'html'};
  cssEditor = {theme: 'vs-dark', language: 'css'};
  jsEditor = {theme: 'vs-dark', language: 'js'};

  component = new TotsComponent();

  constructor() { }

  ngOnInit(): void {
    this.component.html = '<h1>Titulo del Blog</h1><div class="posts">@foreach ($posts as $post)<x-post-card></x-post-card>@endforeach</div>';
  }
}
