import { TotsComponent } from "./tots_component";
import { TotsTemplate } from "./tots_template";

export class TotsPage {
    id?: number;
    template_id: number = 0;
    component_id: number = 0;
    title: string = '';
    slug: string = '';
    type: number = 0;
    status: number = 0;
    data: any;
    created_at: string = '';

    component?: TotsComponent;
    template?: TotsTemplate;
}