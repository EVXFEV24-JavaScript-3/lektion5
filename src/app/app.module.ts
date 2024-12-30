import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteGeneratorComponent } from './quote-generator/quote-generator.component';
import { WelconeComponent } from './welcone/welcone.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectionExampleComponent } from './projection-example/projection-example.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteGeneratorComponent,
    WelconeComponent,
    HomeComponent,
    ProjectionExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
