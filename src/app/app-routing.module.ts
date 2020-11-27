import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '' ,
    pathMatch: 'full',
    redirectTo: 'discussion'
  },
  {
    path: 'discussion' , loadChildren: './lib-wrapper/lib-wrapper.module#LibWrapperModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
