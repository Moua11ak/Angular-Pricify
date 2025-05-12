import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PowerBIEmbedModule } from 'powerbi-client-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FlightPriceFormComponent} from "./flight-price/flight-price-form/flight-price-form.component";
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { PredictionComponent } from './prediction/prediction.component';
import { PowerbiComponent } from './powerbi/powerbi.component';
import { Powerbi1Component } from './powerbi1/powerbi1.component';
import { Powerbi2Component } from './powerbi2/powerbi2.component';
import { Powerbi3Component } from './powerbi3/powerbi3.component';
import { Powerbi4Component } from './powerbi4/powerbi4.component';
import { LoginComponent } from './login/login.component';
import {NgOptimizedImage} from "@angular/common";
import { ReportComponent } from './report/report.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { EcopredictionComponent } from './ecoprediction/ecoprediction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlightPriceFormComponent,
    HeaderComponent,
    BodyComponent,
    PredictionComponent,
    PowerbiComponent,
    Powerbi1Component,
    Powerbi2Component,
    Powerbi3Component,
    Powerbi4Component,
    LoginComponent,
    ReportComponent,
    RecommendationComponent,
    EcopredictionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    PowerBIEmbedModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
