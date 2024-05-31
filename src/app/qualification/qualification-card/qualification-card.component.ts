import { Component, Input } from '@angular/core';
import { Qualification } from '../../utils/models/Qualification';

@Component({
  selector: 'app-qualification-card',
  templateUrl: './qualification-card.component.html',
  styleUrl: './qualification-card.component.css'
})
export class QualificationCardComponent {
  @Input() public qualifiation : any ; 
}
