import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotsComponentEditorPageComponent } from './component-editor-page.component';

describe('ComponentEditorPageComponent', () => {
  let component: TotsComponentEditorPageComponent;
  let fixture: ComponentFixture<TotsComponentEditorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotsComponentEditorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotsComponentEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
