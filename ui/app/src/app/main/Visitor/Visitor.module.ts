import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {VISITOR_MODULE_DECLARATIONS, VisitorRoutingModule} from  './Visitor-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    VisitorRoutingModule
  ],
  declarations: VISITOR_MODULE_DECLARATIONS,
  exports: VISITOR_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VisitorModule { }