import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent implements OnInit {
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
 
}
