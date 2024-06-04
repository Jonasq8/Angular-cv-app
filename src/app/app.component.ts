import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements

  OnInit {
  constructor(private router: Router) { }
  title = 'Jonas Ø. Nielsen - CV ';
  ngOnInit() {
    //  if (location.protocol === 'http:') {
    //    window.location.href = location.href.replace('http', 'https');
    //  }
    //}
    
  }
}
