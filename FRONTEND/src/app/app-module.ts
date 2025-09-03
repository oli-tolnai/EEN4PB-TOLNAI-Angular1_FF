import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NavComponent } from './components/nav/nav.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { ViewComponent } from './components/view/view.component';
import { EditprojComponent } from './components/editproj/editproj.component';
import { AddIssueComponent } from './components/add-issue/add-issue.component';
import { EditIssueComponent } from './components/edit-issue/edit-issue.component';
import { StatsComponent } from './components/stats/stats.component';

@NgModule({
  declarations: [
    App,
    NavComponent,
    ListComponent,
    CreateComponent,
    ViewComponent,
    EditprojComponent,
    AddIssueComponent,
    EditIssueComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
