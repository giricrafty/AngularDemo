import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './component/layout/app-layout/app-layout.component';
import { ListModuleComponent } from './component/list-module/list-module.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: '',
    component: AppLayoutComponent,
    children: [{
      path: 'dashboard', component: ListModuleComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
