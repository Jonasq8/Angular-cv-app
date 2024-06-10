import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../../../utils/models/Experience';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-expericence-card',
  templateUrl: './expericence-card.component.html',
  styleUrl: './expericence-card.component.css'
})
export class ExpericenceCardComponent implements OnInit {
  public isMobile: boolean = false;

  constructor(private responsive: BreakpointObserver) {

  }

  ngOnInit(): void {
    this.responsive.observe([

      //Breakpoints.Small,
       
      Breakpoints.Handset,
    ])
      .subscribe(result => {

        this.isMobile = false;

        if (result.matches) {
          this.isMobile = true;
            
        }

      });
  }
  @Input() public Expericence!: Experience;
  
}
