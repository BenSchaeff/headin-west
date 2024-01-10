import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { OutfittedHuntsComponent } from './outfitted-hunts/outfitted-hunts.component';
import { DiyHuntsComponent } from './diy-hunts/diy-hunts.component'
import { BeforeYouDecideComponent} from './before-you-decide/before-you-decide.component'
import { AboutComponent } from './about/about.component'

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'outfitted', component: OutfittedHuntsComponent},
  {path: 'diy', component: DiyHuntsComponent},
  {path: 'before', component: BeforeYouDecideComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
