import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {

  constructor() { }


  getQualifications() {

    return ["C#", "Angular", "JavaScript", "TypeScript", "Python"]
  }
}
