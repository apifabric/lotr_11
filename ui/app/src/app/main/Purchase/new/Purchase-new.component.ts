import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Purchase-new',
  templateUrl: './Purchase-new.component.html',
  styleUrls: ['./Purchase-new.component.scss']
})
export class PurchaseNewComponent {
  @ViewChild("PurchaseForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}