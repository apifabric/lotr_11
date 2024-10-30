import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchandiseHomeComponent } from './home/Merchandise-home.component';
import { MerchandiseNewComponent } from './new/Merchandise-new.component';
import { MerchandiseDetailComponent } from './detail/Merchandise-detail.component';

const routes: Routes = [
  {path: '', component: MerchandiseHomeComponent},
  { path: 'new', component: MerchandiseNewComponent },
  { path: ':merchandise_id', component: MerchandiseDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Merchandise-detail-permissions'
      }
    }
  },{
    path: ':merchandise_id/Sale', loadChildren: () => import('../Sale/Sale.module').then(m => m.SaleModule),
    data: {
        oPermission: {
            permissionId: 'Sale-detail-permissions'
        }
    }
}
];

export const MERCHANDISE_MODULE_DECLARATIONS = [
    MerchandiseHomeComponent,
    MerchandiseNewComponent,
    MerchandiseDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchandiseRoutingModule { }