import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Visitor-card.component.html',
  styleUrls: ['./Visitor-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Visitor-card]': 'true'
  }
})

export class VisitorCardComponent {


}