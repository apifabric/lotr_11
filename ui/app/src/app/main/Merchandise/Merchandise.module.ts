import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {MERCHANDISE_MODULE_DECLARATIONS, MerchandiseRoutingModule} from  './Merchandise-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    MerchandiseRoutingModule
  ],
  declarations: MERCHANDISE_MODULE_DECLARATIONS,
  exports: MERCHANDISE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MerchandiseModule { }