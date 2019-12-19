import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HealthComponent } from './Components/health/health.component';
import { WealthComponent } from './Components/wealth/wealth.component';
import { SpiritualComponent } from './Components/spiritual/spiritual.component';
import { FinancialCalculatorComponent } from './Components/wealth/calculators/financial-calculator/financial-calculator.component';
import { WealthDivisionsComponent } from './Components/wealth/wealth-divisions/wealth-divisions.component';
import { CalculatorsComponent } from './Components/wealth/calculators/calculators.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HealthComponent,
    WealthComponent,
    SpiritualComponent,
    FinancialCalculatorComponent,
    WealthDivisionsComponent,
    CalculatorsComponent,
    HomeComponent
  ],
  entryComponents: [
    HealthComponent,
    WealthComponent,
    SpiritualComponent,
    FinancialCalculatorComponent,
    WealthDivisionsComponent,
    CalculatorsComponent,
    HomeComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    OnsenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
