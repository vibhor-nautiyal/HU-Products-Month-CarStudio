import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { BuyCarComponent } from './buy-car/buy-car.component';
import { FilterComponent } from './filter/filter.component';
import { CarCardsComponent } from './car-cards/car-cards.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayCardComponent } from './display-card/display-card.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MainSectionComponent,
    BuyCarComponent,
    FilterComponent,
    CarCardsComponent,
    DisplayCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
