import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Attraction-new',
  templateUrl: './Attraction-new.component.html',
  styleUrls: ['./Attraction-new.component.scss']
})
export class AttractionNewComponent {
  @ViewChild("AttractionForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}