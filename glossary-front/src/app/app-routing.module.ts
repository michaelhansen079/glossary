import { NgModule } from '@angular/core';
import {GlossaryListComponent} from './glossary-list/glossary-list.component'
import {GlossaryFormComponent} from './glossary-form/glossary-form.component'
import {GlossaryDetailComponent} from './glossary-detail/glossary-detail.component'
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: GlossaryListComponent},
  {path: 'glossary-list', component: GlossaryListComponent},
  {path: 'glossary-form', component: GlossaryFormComponent},
  {path: 'glossary-detail/:id', component: GlossaryDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
