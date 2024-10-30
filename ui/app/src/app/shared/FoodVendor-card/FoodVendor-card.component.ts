import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './FoodVendor-card.component.html',
  styleUrls: ['./FoodVendor-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.FoodVendor-card]': 'true'
  }
})

export class FoodVendorCardComponent {


}