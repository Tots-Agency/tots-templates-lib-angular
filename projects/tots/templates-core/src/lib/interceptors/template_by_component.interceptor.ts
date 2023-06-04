import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TotsTemplatesService } from '../services/tots_templates.service';

@Injectable()
export class TotsTemplateByComponentInterceptor implements HttpInterceptor {

  constructor(
    protected templateService: TotsTemplatesService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.templateService.templateSelectedId === undefined || this.templateService.templateSelectedId <= 0) {
      return next.handle(request);
    }

    // Validate if url/path contains the "components" word.
    if (!request.url.includes('components')) {
      return next.handle(request);
    }

    let body: any = request.body;
    if(body){
      body.template_id = this.templateService.templateSelectedId;
    }
    
    return next.handle(request.clone({
      params: request.params.set('template_id', this.templateService.templateSelectedId),
      body: body
    }));
  }
}
