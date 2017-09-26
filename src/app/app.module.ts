import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { DetailComponent } from './detail.component';
import { HeroesComponent }     from './heroes.component';
import { SpotService }         from './spots.service';
import { DashboardComponent }  from './dashboard.component';
import { RouterModule }   from '@angular/router';
import { AppRoutingModule }     from './routes/app-routing.module';
import { HttpModule }    from '@angular/http';
import { NearbyPipe } from './pipes/nearby.pipe'

// // for the map
// import { NguiModule, NguiMapModule }  from '@ngui/ngui';

import { AgmCoreModule } from '@agm/core';
// import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AddspotComponent }  from './addspot.component';


@NgModule({
  imports:[
      BrowserModule,
      FormsModule,
      HttpModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyCqc4ZpnGNnyvdakK5eygfSMFYPpC_4phQ'
      }),
    //   AgmSnazzyInfoWindowModule,
    //   NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCqc4ZpnGNnyvdakK5eygfSMFYPpC_4phQ'}),
      InMemoryWebApiModule.forRoot(InMemoryDataService),
      AppRoutingModule,
      ],
      declarations: [
        AppComponent,
        DashboardComponent,
        DetailComponent,
        AddspotComponent,
        HeroesComponent,
        NearbyPipe
    ],
    providers: [
        SpotService
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
