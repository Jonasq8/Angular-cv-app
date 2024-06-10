import { Component, Input,} from '@angular/core';
import { ExperienceService } from '../../utils/service/experience.service';
import { Experience } from '../../utils/models/Experience';



@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  public experiences: Experience[] = []
  public service
  public isLoading: boolean = true; // Initial loading state

  private touchStartX: number = 0;
  private touchEndX: number = 0;


  constructor(service : ExperienceService) {
    this.service = service
  }

  async ngOnInit() {
    try {
      this.experiences = await this.service.getExperiences();
      this.isLoading = false;
      this.experiences.forEach(experience => {
        this.images.push({scr: experience.picture , text:  experience.text})     });
        
    } catch (error) {
      console.error("Error fetching experiences", error);
      this.isLoading = false;
    }
  }

  ngOnChange() {


    }

    get progress(): number {
      return (this.currentExperienceIndex / (this.experiences.length - 1)) * 100;
    }

    currentExperienceIndex: number = 0;
    @Input() images: any[] = [];


    nextExperience(): void {
      console.log(this.currentExperienceIndex < this.experiences.length - 1)
      if (this.currentExperienceIndex < this.experiences.length - 1) {
        console.log("se her")
        this.currentExperienceIndex++;
      }
    }
  
    prevExperience(): void {
      if (this.currentExperienceIndex > 0) {
        this.currentExperienceIndex--;
      }
    }

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

    modalVisible: boolean = false;

    openModal(index: number): void {
      this.currentExperienceIndex = index;
      this.modalVisible = true;
    }
  
    closeModal(): void {
      this.modalVisible = false;
    }

  }


