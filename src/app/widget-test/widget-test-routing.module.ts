import { EntryComponent } from './entry/entry.component';
import { DiscussDetailsComponent } from './discuss-details/discuss-details.component';
import { CategoriesComponent } from './categories/categories.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: EntryComponent,
  children: [
    {path: 'category', component: CategoriesComponent},
    {path: 'details', component: DiscussDetailsComponent }
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetTestRoutingModule { }
