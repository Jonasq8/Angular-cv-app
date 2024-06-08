import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ExperienceComponent } from './experience/experience.component';
import { ExpericenceCardComponent } from './experience/expericence-card/expericence-card.component';

import { ProfileIntroComponent } from './profile-intro/profile-intro.component';


import { QualificationCardComponent } from './qualification/qualification-card/qualification-card.component';
import { QualificationComponent } from './qualification/qualification.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CvComponent } from './cv.component';
import { GalleryComponent } from './gallery/gallery.component';







@NgModule({
  declarations: [
    QualificationCardComponent,
    ExperienceComponent,
    QualificationComponent,
    ExpericenceCardComponent,
    ProfileIntroComponent,
    CvComponent,
    GalleryComponent,
    

  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    
 
  ],
  exports: [
    QualificationCardComponent,
    ExperienceComponent,
    QualificationComponent,
    ExpericenceCardComponent,
    ProfileIntroComponent,
    
  ]
})
export class CvModule { }
