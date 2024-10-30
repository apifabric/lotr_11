import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {FOODVENDOR_MODULE_DECLARATIONS, FoodVendorRoutingModule} from  './FoodVendor-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    FoodVendorRoutingModule
  ],
  declarations: FOODVENDOR_MODULE_DECLARATIONS,
  exports: FOODVENDOR_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FoodVendorModule { }