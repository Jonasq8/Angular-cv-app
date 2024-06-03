import { Injectable } from '@angular/core';
import { Qualification } from '../models/Qualification';
import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';
@Injectable({
  providedIn: 'root'
})
export class QualificationService {

  constructor() { }


 

  getQualifications(): Promise<Qualification[]> {
    //const csvFilePath = path.resolve('../Angular-cv-app/src/assets/Qualification.csv');

    //const headers = ["title", 'text'];

    //  const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

    //  return new Promise((resolve, reject) => {
    //    parse(fileContent, {
    //      delimiter: ';',
    //      fromLine: 2,
    //      columns: headers,
    //    }, (error, result: Qualification[]) => {
    //      if (error) {
    //        console.error(error);
    //        reject(error);
    //      } else {
    //        resolve(result);
    //      }
    //    });
    //  });

    return new Promise((resolve, reject) => {
      resolve([new Qualification("Python", "4/5"),
      new Qualification("C#", "4/5"),
      new Qualification("SQL", "4/5"),])
    });
    }
      
    
  
}
