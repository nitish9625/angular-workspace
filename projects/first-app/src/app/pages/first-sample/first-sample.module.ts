import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstSampleComponent } from './first-sample.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path:'',
    component:FirstSampleComponent
  }
]


@NgModule({
  declarations: [
    FirstSampleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FirstSampleModule { }
