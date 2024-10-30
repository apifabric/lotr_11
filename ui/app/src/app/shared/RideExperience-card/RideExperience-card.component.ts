import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './RideExperience-card.component.html',
  styleUrls: ['./RideExperience-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.RideExperience-card]': 'true'
  }
})

export class RideExperienceCardComponent {


}