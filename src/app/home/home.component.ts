//This is the First page component view

import { Component, Input, HostBinding, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  animations:[ 
  trigger('scaleDown', [
    state('in', style({ transform: 'scale(1)' })),
    transition('in => void', [
      animate('500ms ease', style({transform: 'scale(0)'}))
      ])
    ])
  ]
})
export class HomeComponent {

	@HostBinding('@scaleDown') hostAnimation = "in";

	title: string = 'Mars Colony';

  constructor() { }

}
