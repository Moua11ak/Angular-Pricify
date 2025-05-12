import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FlightPriceFormComponent} from "./flight-price/flight-price-form/flight-price-form.component";
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { PredictionComponent } from './prediction/prediction.component';
import { FormsModule } from '@angular/forms';
import { PowerbiComponent } from './powerbi/powerbi.component';
import { Powerbi1Component } from './powerbi1/powerbi1.component';
import { Powerbi2Component } from './powerbi2/powerbi2.component';
import { Powerbi3Component } from './powerbi3/powerbi3.component';
import { Powerbi4Component } from './powerbi4/powerbi4.component';
import { LoginComponent } from './login/login.component';
import {ReportComponent} from "./report/report.component";
import {RecommendationComponent} from "./recommendation/recommendation.component";
import {EcopredictionComponent} from "./ecoprediction/ecoprediction.component";
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // Default route
  { path: 'home', component: BodyComponent },
  { path: 'prediction', component: PredictionComponent },
  //powerbi paths
  {path:'powerbi',component:PowerbiComponent},
  {path:'powerbi1',component:Powerbi1Component},
  {path:'powerbi2',component:Powerbi2Component},
  {path:'powerbi3',component:Powerbi3Component},
  {path:'powerbi4',component:Powerbi4Component},
  {path:'login',component:LoginComponent},
  {path:'report',component:ReportComponent},
  {path:'recommendation',component:RecommendationComponent},
  {path:'ecoprediction',component:EcopredictionComponent}






];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
