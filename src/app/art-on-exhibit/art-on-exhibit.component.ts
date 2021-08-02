import { Component, OnInit, Input } from '@angular/core';
import { IA4_ART_DETAILS } from 'src/app/myCLasses/A4Interfaces';

@Component({
  selector: 'app-art-on-exhibit',
  templateUrl: './art-on-exhibit.component.html',
  styleUrls: ['./art-on-exhibit.component.css']
})
export class ArtOnExhibitComponent implements OnInit {

  @Input() artDetailsIn! : IA4_ART_DETAILS [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
