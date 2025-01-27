import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffHomeComponent } from './home/Staff-home.component';
import { StaffNewComponent } from './new/Staff-new.component';
import { StaffDetailComponent } from './detail/Staff-detail.component';

const routes: Routes = [
  {path: '', component: StaffHomeComponent},
  { path: 'new', component: StaffNewComponent },
  { path: ':staff_id', component: StaffDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Staff-detail-permissions'
      }
    }
  },{
    path: ':staff_id/Maintenance', loadChildren: () => import('../Maintenance/Maintenance.module').then(m => m.MaintenanceModule),
    data: {
        oPermission: {
            permissionId: 'Maintenance-detail-permissions'
        }
    }
}
];

export const STAFF_MODULE_DECLARATIONS = [
    StaffHomeComponent,
    StaffNewComponent,
    StaffDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }