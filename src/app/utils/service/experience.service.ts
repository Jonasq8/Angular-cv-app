import { Injectable } from '@angular/core';
import { Experience } from '../models/Experience';
import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }


  async getExperiences(): Promise<Experience[]> {
    //  const csvFilePath = path.resolve('../Angular-cv-app/src/assets/experince.csv');

    //  const headers = ["title", 'text',"picture"];

    //  const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

    //  return new Promise((resolve, reject) => {
    //    parse(fileContent, {
    //      delimiter: ';',
    //      fromLine: 2,
    //      columns: headers,
    //    }, (error, result: Experience[]) => {
    //      if (error) {
    //        console.error(error);
    //        reject(error);
    //      } else {
    //        resolve(result);
    //      }
    //    });
    //  });
    return new Promise((resolve, reject) => {
      resolve([new Experience("UCN", "Jeg bestod den afsluttende eksamen med 10 og har et gennemsnit på 11,33. Uddannelsen giver kerne kompetencer til udviklingen af software, med fokus på kodningssprogene Java og C#.Hertil har jeg lært om forskellige udviklingsmetoder f.eks.SCRUM og unified process.Desuden har jeg modtaget undervisning i teknologier som MSSQL og ASP.Net, som giver mulighed for at lave distribueret systemer.Mit afsluttende projekt var et distribueret system som gav rådgivningen til læger og sygeplejer vedrørene patienters blodsukker.Systemet bestod af en Angluar front-end, en ASP.Net backend og en MMSQL server ", "https://ucn-cdn-endpoint-prod.azureedge.net/cache/b/7/4/2/f/8/b742f8a48a0f78ad3bce7bd56733aaef4fef0f6d.jpg"),
        ])
    });
  }

}

