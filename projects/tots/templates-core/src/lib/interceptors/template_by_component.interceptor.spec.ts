import { TestBed } from '@angular/core/testing';

import { TotsTemplateByComponentInterceptor } from './template_by_component.interceptor';

describe('TemplateInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TotsTemplateByComponentInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TotsTemplateByComponentInterceptor = TestBed.inject(TotsTemplateByComponentInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
