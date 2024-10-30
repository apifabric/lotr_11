import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PURCHASE_MODULE_DECLARATIONS, PurchaseRoutingModule} from  './Purchase-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PurchaseRoutingModule
  ],
  declarations: PURCHASE_MODULE_DECLARATIONS,
  exports: PURCHASE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PurchaseModule { }