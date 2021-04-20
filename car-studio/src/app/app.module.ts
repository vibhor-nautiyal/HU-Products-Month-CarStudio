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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayCardComponent } from './display-card/display-card.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

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
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
