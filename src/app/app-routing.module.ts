import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapTestComponentComponent } from './bootstrap-test-component/bootstrap-test-component.component';
import { ControllersComponent } from './controllers/controllers.component';
import { HtmlTestComponentComponent } from './html-test-component/html-test-component.component';
const routes: Routes = [{ path: 'html-test', component: HtmlTestComponentComponent },
 { path: 'bootstrap-test', component: BootstrapTestComponentComponent },
 {path:'component', component:ControllersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

