import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '' ,
  //   pathMatch: 'full',
  //   redirectTo: 'discussion'
  // },
  // {
  //   path: 'discussion' , loadChildren: './lib-wrapper/lib-wrapper.module#LibWrapperModule',
  //   data: {
  //     apiSlug: 'discussion',
  //     host: 'http://localhost:3002',
  //     forumIds: ['1', '2', '6']
  //   }
  // },
  {
    path: 'discussion' , loadChildren: './widget-test/widget-test.module#WidgetTestModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
