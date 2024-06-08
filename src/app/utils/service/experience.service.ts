import { Injectable } from '@angular/core';
import { Experience } from '../models/Experience';


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

    var kubenTitle = `Studiemedhjælper - kvalitet og digitalisering - Kubenmanagement `
    var kubenText = `Hos Kubenmanagement arbejdede jeg med JavaScript til Adobe reader. Til at hjælpe med automatiseringen af tekst input i standard dokumenter. 
                      Desuden lavede jeg et C# program som kunne scrape indholdet af flere Excel dokumenter i en mappe og generer en PowerBI Report.`
    var kubenLink = `assets/Kuben.jpg`
    var AmphiTitle = `Studentermedhjælper hos AmphiSystems A/S`
    var AmphiText = `Jeg fik til opgave at lave opsætnings Images til Windows tablets. Hertil brugte jeg PowerShell Scripts og WinPE som installerede den ønskede version af Windows, drivers, certifikater og applikationer. Disse tablets skulle bruges til Præhospitals patients journal (PPJ) som benyttes i landets ambulancer. `
    var AmphiLink = `assets/Amphi.png`
    return new Promise((resolve, reject) => {
      resolve([new Experience("UCN - Datamatiker uddannelsen", "Jeg bestod den afsluttende eksamen med 10 og har et gennemsnit på 11,33. Uddannelsen giver kerne kompetencer til udviklingen af software, med fokus på kodningssprogene Java og C#.Hertil har jeg lært om forskellige udviklingsmetoder f.eks.SCRUM og unified process.Desuden har jeg modtaget undervisning i teknologier som MSSQL og ASP.Net, som giver mulighed for at lave distribueret systemer.Mit afsluttende projekt var et distribueret system som gav rådgivningen til læger og sygeplejer vedrørene patienters blodsukker.Systemet bestod af en Angluar front-end, en ASP.Net backend og en MMSQL server ", "assets/UCN.jpg"),
        new Experience(kubenTitle, kubenText, kubenLink),
        new Experience(AmphiTitle, AmphiText, AmphiLink )
        ])
    });
  }

}

