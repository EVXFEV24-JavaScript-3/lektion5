import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelconeComponent } from './welcone/welcone.component';
import { QuoteGeneratorComponent } from './quote-generator/quote-generator.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: "welcome/:greeting", component: WelconeComponent },
  { path: "quotes", component: QuoteGeneratorComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }