import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'FoodVendor-new',
  templateUrl: './FoodVendor-new.component.html',
  styleUrls: ['./FoodVendor-new.component.scss']
})
export class FoodVendorNewComponent {
  @ViewChild("FoodVendorForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}