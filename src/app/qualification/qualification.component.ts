import { Component } from '@angular/core';
import { QualificationService } from '../utils/service/qualification.service';


@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrl: './qualification.component.css'
})
export class QualificationComponent {



  qualifiations: string[] = []

  constructor(qualificationsService : QualificationService) {
    this.qualifiations = qualificationsService.getQualifications()
  }

  public getQualification() {
    
  }


}
