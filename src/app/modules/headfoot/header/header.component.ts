import { Component, OnInit,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IA4_DETAILS } from 'src/app/myCLasses/A4Interfaces';
import { DialogboxComponent } from 'src/app/dialogbox/dialogbox.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() studentDetailsIn!:IA4_DETAILS;


  openDetailDialog(){
    const dialogRef = this.dialog.open(DialogboxComponent, 
      {
        data: this.studentDetailsIn,
        width: '600px'
      });


}

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
