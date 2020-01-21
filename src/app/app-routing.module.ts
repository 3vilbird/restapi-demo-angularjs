import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdatingComponent } from './updating/updating.component';
import { ByparameterComponent } from './byparameter/byparameter.component';
import { CreatedemoComponent } from './createdemo/createdemo.component';
import { DeletingComponent } from './deleting/deleting.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'adduser', component: AdduserComponent},
  {path: 'patch', component: UpdatingComponent},
  {path: 'parameter', component: ByparameterComponent},
  {path: 'create', component: CreatedemoComponent},
  {path: 'delete', component: DeletingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
