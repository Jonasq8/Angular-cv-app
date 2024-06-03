import { Component,} from '@angular/core';
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

  constructor(service : ExperienceService) {
    this.service = service
  }

  async ngOnInit() {
    try {
      this.experiences = await this.service.getExperiences();
      this.isLoading = false;
    } catch (error) {
      console.error("Error fetching experiences", error);
      this.isLoading = false;
    }
  }

  ngOnChange() {


    }
  }


