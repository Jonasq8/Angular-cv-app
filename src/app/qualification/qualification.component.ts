import { Component } from '@angular/core';
import { QualificationService } from '../utils/service/qualification.service';
import { Qualification } from '../utils/models/Qualification';


@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrl: './qualification.component.css'
})
export class QualificationComponent {
  public qualifiations: Qualification[] = []
 public service
  public isLoading: boolean = true; // Initial loading state
 

  constructor(qualificationsService : QualificationService) {
    this.service = qualificationsService
  }

  async ngOnInit() {
    try {
      this.qualifiations = await this.service.getQualifications()
      this.isLoading = false;
    } catch (error) {
      console.error("Error fetching experiences", error);
      this.isLoading = false;
    }
    

  }


}
