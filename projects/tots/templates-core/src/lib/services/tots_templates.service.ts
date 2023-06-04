import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { TotsBaseHttpService, TotsCoreConfig, TotsListResponse, TotsQuery, TOTS_CORE_PROVIDER } from '@tots/core';
import { TotsTemplate } from '../entities/tots_template';


@Injectable({
  providedIn: 'root'
})
export class TotsTemplatesService extends TotsBaseHttpService<TotsTemplate> {

  templateSelectedId?: number;

  constructor(
    @Inject(TOTS_CORE_PROVIDER) protected override config: TotsCoreConfig,
    protected override http: HttpClient,
  ) {
    super(config, http);
    this.basePathUrl = 'templates';
  }

  setTemplateCurrentId(id: number) {
    this.templateSelectedId = id;
  }
}
