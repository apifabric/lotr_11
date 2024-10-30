import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Purchase-card.component.html',
  styleUrls: ['./Purchase-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Purchase-card]': 'true'
  }
})

export class PurchaseCardComponent {


}