import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeadfootModule } from './modules/headfoot/headfoot.module';
import { ReactiveFormsModule} from '@angular/forms'; 
import { MaterialModule} from './modules/material-ui/material-ui.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ArtOnExhibitComponent } from './art-on-exhibit/art-on-exhibit.component';
import { ArtByCultureComponent } from './art-by-culture/art-by-culture.component';

import { DialogboxComponent } from './dialogbox/dialogbox.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtOnExhibitComponent,
    ArtByCultureComponent,
    DialogboxComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HeadfootModule,
    ReactiveFormsModule, 
	  MaterialModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
