import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RideExperienceHomeComponent } from './home/RideExperience-home.component';
import { RideExperienceNewComponent } from './new/RideExperience-new.component';
import { RideExperienceDetailComponent } from './detail/RideExperience-detail.component';

const routes: Routes = [
  {path: '', component: RideExperienceHomeComponent},
  { path: 'new', component: RideExperienceNewComponent },
  { path: ':experience_id', component: RideExperienceDetailComponent,
    data: {
      oPermission: {
        permissionId: 'RideExperience-detail-permissions'
      }
    }
  }
];

export const RIDEEXPERIENCE_MODULE_DECLARATIONS = [
    RideExperienceHomeComponent,
    RideExperienceNewComponent,
    RideExperienceDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RideExperienceRoutingModule { }