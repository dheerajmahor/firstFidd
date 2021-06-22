import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { HomeComponent } from './home/home.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { PressreleaseComponent } from './pressrelease/pressrelease.component';
import { TemplatedriveformComponent } from './templatedriveform/templatedriveform.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'brands',component:BrandsComponent},
  {path:'ourteam',component:OurteamComponent},
  {path:'pressrelease',component:PressreleaseComponent},
  {path:'contact',component:ContactComponent},
  {path:'careers',component:CareersComponent},
  {path:'franchise',component:FranchiseComponent},
  {path:'templatedriveform',component:TemplatedriveformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
