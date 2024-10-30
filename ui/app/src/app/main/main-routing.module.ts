import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Attraction', loadChildren: () => import('./Attraction/Attraction.module').then(m => m.AttractionModule) },
    
        { path: 'Event', loadChildren: () => import('./Event/Event.module').then(m => m.EventModule) },
    
        { path: 'FoodVendor', loadChildren: () => import('./FoodVendor/FoodVendor.module').then(m => m.FoodVendorModule) },
    
        { path: 'Maintenance', loadChildren: () => import('./Maintenance/Maintenance.module').then(m => m.MaintenanceModule) },
    
        { path: 'Merchandise', loadChildren: () => import('./Merchandise/Merchandise.module').then(m => m.MerchandiseModule) },
    
        { path: 'Purchase', loadChildren: () => import('./Purchase/Purchase.module').then(m => m.PurchaseModule) },
    
        { path: 'Reservation', loadChildren: () => import('./Reservation/Reservation.module').then(m => m.ReservationModule) },
    
        { path: 'RideExperience', loadChildren: () => import('./RideExperience/RideExperience.module').then(m => m.RideExperienceModule) },
    
        { path: 'Sale', loadChildren: () => import('./Sale/Sale.module').then(m => m.SaleModule) },
    
        { path: 'Staff', loadChildren: () => import('./Staff/Staff.module').then(m => m.StaffModule) },
    
        { path: 'Ticket', loadChildren: () => import('./Ticket/Ticket.module').then(m => m.TicketModule) },
    
        { path: 'Visitor', loadChildren: () => import('./Visitor/Visitor.module').then(m => m.VisitorModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }