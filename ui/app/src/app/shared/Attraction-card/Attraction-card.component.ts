import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Attraction-card.component.html',
  styleUrls: ['./Attraction-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Attraction-card]': 'true'
  }
})

export class AttractionCardComponent {


}