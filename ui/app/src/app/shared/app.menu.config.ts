import { MenuRootItem } from 'ontimize-web-ngx';

import { AttractionCardComponent } from './Attraction-card/Attraction-card.component';

import { EventCardComponent } from './Event-card/Event-card.component';

import { FoodVendorCardComponent } from './FoodVendor-card/FoodVendor-card.component';

import { MaintenanceCardComponent } from './Maintenance-card/Maintenance-card.component';

import { MerchandiseCardComponent } from './Merchandise-card/Merchandise-card.component';

import { PurchaseCardComponent } from './Purchase-card/Purchase-card.component';

import { ReservationCardComponent } from './Reservation-card/Reservation-card.component';

import { RideExperienceCardComponent } from './RideExperience-card/RideExperience-card.component';

import { SaleCardComponent } from './Sale-card/Sale-card.component';

import { StaffCardComponent } from './Staff-card/Staff-card.component';

import { TicketCardComponent } from './Ticket-card/Ticket-card.component';

import { VisitorCardComponent } from './Visitor-card/Visitor-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Attraction', name: 'ATTRACTION', icon: 'view_list', route: '/main/Attraction' }
    
        ,{ id: 'Event', name: 'EVENT', icon: 'view_list', route: '/main/Event' }
    
        ,{ id: 'FoodVendor', name: 'FOODVENDOR', icon: 'view_list', route: '/main/FoodVendor' }
    
        ,{ id: 'Maintenance', name: 'MAINTENANCE', icon: 'view_list', route: '/main/Maintenance' }
    
        ,{ id: 'Merchandise', name: 'MERCHANDISE', icon: 'view_list', route: '/main/Merchandise' }
    
        ,{ id: 'Purchase', name: 'PURCHASE', icon: 'view_list', route: '/main/Purchase' }
    
        ,{ id: 'Reservation', name: 'RESERVATION', icon: 'view_list', route: '/main/Reservation' }
    
        ,{ id: 'RideExperience', name: 'RIDEEXPERIENCE', icon: 'view_list', route: '/main/RideExperience' }
    
        ,{ id: 'Sale', name: 'SALE', icon: 'view_list', route: '/main/Sale' }
    
        ,{ id: 'Staff', name: 'STAFF', icon: 'view_list', route: '/main/Staff' }
    
        ,{ id: 'Ticket', name: 'TICKET', icon: 'view_list', route: '/main/Ticket' }
    
        ,{ id: 'Visitor', name: 'VISITOR', icon: 'view_list', route: '/main/Visitor' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AttractionCardComponent

    ,EventCardComponent

    ,FoodVendorCardComponent

    ,MaintenanceCardComponent

    ,MerchandiseCardComponent

    ,PurchaseCardComponent

    ,ReservationCardComponent

    ,RideExperienceCardComponent

    ,SaleCardComponent

    ,StaffCardComponent

    ,TicketCardComponent

    ,VisitorCardComponent

];