import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path : 'about',component:AboutComponent},
  {path : 'notFound ' ,component:NotfoundComponent},
  {path : 'home' , component: HomeComponent},
  { path: '', component: HomeComponent },
  { path: '**', component: NotfoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
