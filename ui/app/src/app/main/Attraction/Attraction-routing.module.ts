import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttractionHomeComponent } from './home/Attraction-home.component';
import { AttractionNewComponent } from './new/Attraction-new.component';
import { AttractionDetailComponent } from './detail/Attraction-detail.component';

const routes: Routes = [
  {path: '', component: AttractionHomeComponent},
  { path: 'new', component: AttractionNewComponent },
  { path: ':attraction_id', component: AttractionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Attraction-detail-permissions'
      }
    }
  },{
    path: ':attraction_id/Maintenance', loadChildren: () => import('../Maintenance/Maintenance.module').then(m => m.MaintenanceModule),
    data: {
        oPermission: {
            permissionId: 'Maintenance-detail-permissions'
        }
    }
},{
    path: ':attraction_id/RideExperience', loadChildren: () => import('../RideExperience/RideExperience.module').then(m => m.RideExperienceModule),
    data: {
        oPermission: {
            permissionId: 'RideExperience-detail-permissions'
        }
    }
}
];

export const ATTRACTION_MODULE_DECLARATIONS = [
    AttractionHomeComponent,
    AttractionNewComponent,
    AttractionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttractionRoutingModule { }