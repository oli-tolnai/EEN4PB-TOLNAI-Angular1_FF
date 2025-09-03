import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { ViewComponent } from './components/view/view.component';
import { EditprojComponent } from './components/editproj/editproj.component';
import { AddIssueComponent } from './components/add-issue/add-issue.component';
import { EditIssueComponent } from './components/edit-issue/edit-issue.component';
import { StatsComponent } from './components/stats/stats.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'create', component: CreateComponent },
  { path: 'view/:id', component: ViewComponent },
  { path: 'editproj/:id', component: EditprojComponent },
  { path: 'addIssue/:id', component: AddIssueComponent },
  { path: 'editIssue/:id', component: EditIssueComponent },
  { path: 'stats', component: StatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
