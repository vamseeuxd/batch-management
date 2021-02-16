import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/app-header/header.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { PageNavigatorComponent } from './components/page-navigator/page-navigator.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BatchesComponent } from './pages/batches/batches.component';
import { StudentsComponent } from './pages/students/students.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { ManageBatchesComponent } from './modals/manage-batches/manage-batches.component';
import { ManageStudentsComponent } from './modals/manage-students/manage-students.component';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarMenuComponent,
    PageNavigatorComponent,
    LayoutComponent,
    DashboardComponent,
    BatchesComponent,
    StudentsComponent,
    TechnologiesComponent,
    ManageBatchesComponent,
    ManageStudentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
