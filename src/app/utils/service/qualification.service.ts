import { Injectable } from '@angular/core';
import { Qualification } from '../models/Qualification';
import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QualificationService {

  constructor() { }


 

  async getQualifications(): Promise<Qualification[] > {
    const csvFilePath = path.resolve('C:\\Users\\jonas\\source\\repos\\AngularCV\\angular-cv-app\\src\\assets\\Qualification.csv');

    const headers = ["title", 'text'];

      const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

      return new Promise((resolve, reject) => {
        parse(fileContent, {
          delimiter: ';',
          fromLine: 2,
          columns: headers,
        }, (error, result: Qualification[]) => {
          if (error) {
            console.error(error);
            reject(error);
          } else {
            resolve(result);
          }
        });
      });

    }
  
}
