import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { BusinessComponent } from './business/business.component';
import { InvestmentComponent } from './investment/investment.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent },
  {path: 'welcome', component: WelcomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'business', component: BusinessComponent },
  {path: 'investment', component: InvestmentComponent },
  {path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
