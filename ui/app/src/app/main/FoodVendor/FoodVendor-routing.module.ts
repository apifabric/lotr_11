import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodVendorHomeComponent } from './home/FoodVendor-home.component';
import { FoodVendorNewComponent } from './new/FoodVendor-new.component';
import { FoodVendorDetailComponent } from './detail/FoodVendor-detail.component';

const routes: Routes = [
  {path: '', component: FoodVendorHomeComponent},
  { path: 'new', component: FoodVendorNewComponent },
  { path: ':vendor_id', component: FoodVendorDetailComponent,
    data: {
      oPermission: {
        permissionId: 'FoodVendor-detail-permissions'
      }
    }
  },{
    path: ':vendor_id/Purchase', loadChildren: () => import('../Purchase/Purchase.module').then(m => m.PurchaseModule),
    data: {
        oPermission: {
            permissionId: 'Purchase-detail-permissions'
        }
    }
}
];

export const FOODVENDOR_MODULE_DECLARATIONS = [
    FoodVendorHomeComponent,
    FoodVendorNewComponent,
    FoodVendorDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodVendorRoutingModule { }