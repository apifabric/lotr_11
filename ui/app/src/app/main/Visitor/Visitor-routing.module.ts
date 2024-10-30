import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorHomeComponent } from './home/Visitor-home.component';
import { VisitorNewComponent } from './new/Visitor-new.component';
import { VisitorDetailComponent } from './detail/Visitor-detail.component';

const routes: Routes = [
  {path: '', component: VisitorHomeComponent},
  { path: 'new', component: VisitorNewComponent },
  { path: ':visitor_id', component: VisitorDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Visitor-detail-permissions'
      }
    }
  },{
    path: ':visitor_id/Purchase', loadChildren: () => import('../Purchase/Purchase.module').then(m => m.PurchaseModule),
    data: {
        oPermission: {
            permissionId: 'Purchase-detail-permissions'
        }
    }
},{
    path: ':visitor_id/Reservation', loadChildren: () => import('../Reservation/Reservation.module').then(m => m.ReservationModule),
    data: {
        oPermission: {
            permissionId: 'Reservation-detail-permissions'
        }
    }
},{
    path: ':visitor_id/RideExperience', loadChildren: () => import('../RideExperience/RideExperience.module').then(m => m.RideExperienceModule),
    data: {
        oPermission: {
            permissionId: 'RideExperience-detail-permissions'
        }
    }
}
];

export const VISITOR_MODULE_DECLARATIONS = [
    VisitorHomeComponent,
    VisitorNewComponent,
    VisitorDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }