import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-expericence-card',
  templateUrl: './expericence-card.component.html',
  styleUrl: './expericence-card.component.css'
})
export class ExpericenceCardComponent {
  @Input() public Expericence: any;
}
