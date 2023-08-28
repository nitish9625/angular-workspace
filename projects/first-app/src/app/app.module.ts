import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgScrollbarModule } from 'ngx-scrollbar';
import {
  SiteFooterComponent,
  SiteHeaderComponent,
  SiteLayoutComponent,
  SiteSidebarComponent,
  AppLayoutComponent
} from './shared'

@NgModule({
  declarations: [
    AppComponent,
    SiteFooterComponent,
    SiteHeaderComponent,
    SiteLayoutComponent,
    SiteSidebarComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCollapseModule,
    NgScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
