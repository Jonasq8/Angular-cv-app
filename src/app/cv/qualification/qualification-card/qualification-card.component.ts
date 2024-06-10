import { Component, Input, OnInit } from '@angular/core';
import { Qualification } from '../../../utils/models/Qualification';


@Component({
  selector: 'app-qualification-card',
  templateUrl: './qualification-card.component.html',
  styleUrl: './qualification-card.component.css'
})
export class QualificationCardComponent implements OnInit {
  @Input() public qualifiation!: Qualification;
  public stars : string = ""


  ngOnInit() {
    if (this.qualifiation instanceof Qualification) {
      this.stars = this.calculateStars(this.qualifiation.stars)
    }
   
  }

  calculateStars(number: number): string {
    if (number === 1) {
      return "★"
    }if (number === 2) {
      return "★★"
    } if (number === 3) {
      return "★★★"
    } if (number === 4) {
      return "★★★★"
    } if (number === 5) {
      return "★★★★★"
    } 
    return ""
  }
}
