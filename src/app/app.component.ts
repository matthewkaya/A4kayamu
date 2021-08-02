import { Component } from '@angular/core';
import { IA4_ART_DETAILS, IA4_CULTURE_FEATURES, IA4_DETAILS } from 'src/app/myCLasses/A4Interfaces';
import { ArtByCultureComponent } from './art-by-culture/art-by-culture.component';
import { ArtOnExhibitComponent } from './art-on-exhibit/art-on-exhibit.component';


import jsonFile from '../assets/data/A4.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A4kayamu';

  studentDetailsOut : IA4_DETAILS = jsonFile.myDetails;
  cultureFeaturedOut: IA4_CULTURE_FEATURES [] = jsonFile.culturesFeatured;
  artDetailsOut : IA4_ART_DETAILS [] = jsonFile.artDetails;

  

}
