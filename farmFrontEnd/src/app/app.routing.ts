import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmsListComponent } from './farms-list/farms-list.component';
import { ChickensListComponent } from './chickens-list/chickens-list.component';
import { FarmsCreateComponent } from './farms-create/farms-create.component';
import { ChickensCreateComponent } from './chickens-create/chickens-create.component';
import { ChickensUpdateComponent } from './chickens-update/chickens-update.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'farms-list' },
  { path: 'farms-list', component: FarmsListComponent },
  { path: 'farms-create', component: FarmsCreateComponent },
  { path: 'chickens-list', component: ChickensListComponent },
  { path: 'chickens-create/:id', component: ChickensCreateComponent },
  { path: 'chickens-list/:id', component: ChickensListComponent },
  { path: 'chickens-update/:id', component: ChickensUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
