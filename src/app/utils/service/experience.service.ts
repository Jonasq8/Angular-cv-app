import { Injectable } from '@angular/core';
import { Experience } from '../models/Experience';
import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }


  async getExperiences(): Promise<Experience[]> {
    const csvFilePath = path.resolve('C:\\Users\\jonas\\source\\repos\\AngularCV\\angular-cv-app\\src\\assets\\experince.csv');
    const headers = ["title", 'text'];

    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

    return new Promise((resolve, reject) => {
      parse(fileContent, {
        delimiter: ';',
        fromLine: 2,
        columns: headers,
      }, (error, result: Experience[]) => {
        if (error) {
          console.error(error);
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
     
      
    
    
   




    //let KubenManagement = new Experience('KubenManagement',"JEG VAR SEJ")
    //let AmphiSystems = new Experience('wd',"wd")

    //return [KubenManagement, AmphiSystems]
  }

}
