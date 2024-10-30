import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Visitor-new',
  templateUrl: './Visitor-new.component.html',
  styleUrls: ['./Visitor-new.component.scss']
})
export class VisitorNewComponent {
  @ViewChild("VisitorForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}