import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ATTRACTION_MODULE_DECLARATIONS, AttractionRoutingModule} from  './Attraction-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AttractionRoutingModule
  ],
  declarations: ATTRACTION_MODULE_DECLARATIONS,
  exports: ATTRACTION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AttractionModule { }