import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteLayoutComponent } from './shared';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    loadChildren:()=> import('./pages/pages.module').then(m=>m.PagesModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
