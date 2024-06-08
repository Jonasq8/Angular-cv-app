import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent implements OnInit {

  public showMenu: Boolean = false;

  constructor(private responsive: BreakpointObserver) {

  }
    ngOnInit(): void {
      this.responsive.observe([
        
        //Breakpoints.Small,
        //Breakpoints.Web,
        Breakpoints.Handset,
      ])
        .subscribe(result => {

          this.showMenu = false;

          if (result.matches) {
            this.showMenu = true;
          }

        });
    }
}
