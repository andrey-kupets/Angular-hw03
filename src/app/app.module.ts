import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { FullCarComponent } from './components/full-car/full-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    HomeComponent,
    CarsComponent,
    FullCarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'link/home', component: HomeComponent
    },{
      path: 'link/cars', component: CarsComponent, children: [
        {path: ':id', component: FullCarComponent}
      ]
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
