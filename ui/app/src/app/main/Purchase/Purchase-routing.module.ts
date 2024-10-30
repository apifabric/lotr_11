import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseHomeComponent } from './home/Purchase-home.component';
import { PurchaseNewComponent } from './new/Purchase-new.component';
import { PurchaseDetailComponent } from './detail/Purchase-detail.component';

const routes: Routes = [
  {path: '', component: PurchaseHomeComponent},
  { path: 'new', component: PurchaseNewComponent },
  { path: ':purchase_id', component: PurchaseDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Purchase-detail-permissions'
      }
    }
  }
];

export const PURCHASE_MODULE_DECLARATIONS = [
    PurchaseHomeComponent,
    PurchaseNewComponent,
    PurchaseDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }