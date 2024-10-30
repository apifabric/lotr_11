import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Merchandise-card.component.html',
  styleUrls: ['./Merchandise-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Merchandise-card]': 'true'
  }
})

export class MerchandiseCardComponent {


}