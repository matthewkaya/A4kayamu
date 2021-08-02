import { Component, OnInit, Input } from '@angular/core';
import { IA4_CULTURE_FEATURES, IA4_ART_DETAILS } from 'src/app/myCLasses/A4Interfaces';

import JsonData from '../../assets/data/A4.json';


@Component({
  selector: 'app-art-by-culture',
  templateUrl: './art-by-culture.component.html',
  styleUrls: ['./art-by-culture.component.css']
})
export class ArtByCultureComponent implements OnInit {

  cultureFeaturedIn :  IA4_CULTURE_FEATURES []= JsonData.culturesFeatured;
  @Input() artDetailsIn! : IA4_ART_DETAILS [];

  filtredArtDetail: IA4_ART_DETAILS [] =[];

  fitredcultureFeatured: string [] = [];
  outPutHTML:string="";

  async ngAfterViewInit(){
    for (let cult of this.cultureFeaturedIn)
    {
      this.fitredcultureFeatured.push(cult.culture);
    }
    console.log(this.fitredcultureFeatured);
  }

  displayFiltredData(culture:string){

    this.filtredArtDetail = this.artDetailsIn.filter(art => art.culture===culture);

    this.outPutHTML =`
      <h3>Class List for Culture of ${culture}</h3>
      <table width="%95">
        `;

    this.outPutHTML += `
        <tr>
        <thead class='tableHeader'>
          <th width="10%"></th>
          <th width="30%">Description</th>
          <th width="12%">Title</th>
          <th width="12%">Creator</th>
          <th width="12%">Creation Date</th>
        </tr>
        </thead>
        <tbody class="tableBody">`;

   for (let art of this.filtredArtDetail)
    {
       this.outPutHTML +=`       
        <tr>
          <td><p><strong>ID:</strong></p><p>${art.id}</p><hr><p><strong>Technique</strong></p><p>${art.technique}</p></td>
          <td><p>${art.description}</p></td>
          <td><p>${art.title}</p></td>
          <td><p>${art.creator}</p></td>
          <td><p>${art.creation_date}</p></td>
        </tr>`;        
    }
    this.outPutHTML += `
          </tbody> 
        </table>`;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
