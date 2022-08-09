import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"create",component:CreateComponent},
  {path:"play:game",component:PlayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
