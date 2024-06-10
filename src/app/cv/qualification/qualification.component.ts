import { Component, OnInit } from '@angular/core';
import { Qualification } from '../../utils/models/Qualification';
import { QualificationService } from '../../utils/service/qualification.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {
  public qualifications: Qualification[] = [];
  public isMobile: boolean = true;

  public currentExperienceIndex: number = 0;

  private touchStartX: number = 0;
  private touchEndX: number = 0;

  constructor(private qualificationsService: QualificationService, private responsive: BreakpointObserver) {}

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchMove(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX;
  }

  onTouchEnd(): void {
    if (this.touchEndX < this.touchStartX) {
      this.nextExperience();
    } else if (this.touchEndX > this.touchStartX) {
      this.prevExperience();
    }
  }

  nextExperience(): void {
    if (this.currentExperienceIndex < this.qualifications.length/4) {
      this.currentExperienceIndex++;
    }
  }

  prevExperience(): void {
    if (this.currentExperienceIndex/4 > 0) {
      this.currentExperienceIndex--;
    }
  }

  get progress(): number {
    return (this.currentExperienceIndex / (this.qualifications.length/4));
  }

  get indicators(): number[] {
    const numIndicators = Math.ceil(this.qualifications.length / 3);
    return Array.from({ length: numIndicators }, (_, i) => i);
  }

  async ngOnInit(): Promise<void> {
    try {
      this.qualifications = await this.qualificationsService.getQualifications();
     
    } catch (error) {
      console.error("Error fetching qualifications", error);
   
    }

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
