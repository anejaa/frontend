import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutView } from './views/about/about.view';
import { HomeView } from './views/home/home.view'
import { NoteView } from './views/note/note.view';
import { SearchLocationComponent } from './components/search-location/search-location.component';
import { LocationService } from './helpers/location.service';
import { MapComponent } from './components/map/map.component';
import { TownInfoComponent } from './components/town-info/town-info.component';
import { TripPlanComponent } from './components/trip-plan/trip-plan.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeView,
        NoteView,
        AboutView,
        HeaderComponent,
        FooterComponent,
        SearchLocationComponent,
        MapComponent,
        TownInfoComponent,
        TripPlanComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule, HttpClientModule], providers: [LocationService],
})
export class AppModule { }
