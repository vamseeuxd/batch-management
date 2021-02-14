import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {HeaderComponent} from './components/app-header/header.component';
import {SidebarMenuComponent} from './components/sidebar-menu/sidebar-menu.component';
import {PageNavigatorComponent} from './components/page-navigator/page-navigator.component';
import {LayoutComponent} from './components/layout/layout.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {BatchesComponent} from './pages/batches/batches.component';
import {StudentsComponent} from './pages/students/students.component';
import {TechnologiesComponent} from './pages/technologies/technologies.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AgGridModule} from 'ag-grid-angular';
import { ManageBatchesComponent } from './modals/manage-batches/manage-batches.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { FacultiesComponent } from './pages/faculties/faculties.component';
import { ManageStudentsComponent } from './modals/manage-students/manage-students.component';
const maskConfig: Partial<IConfig> = {
  validation: true,
};
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
    FacultiesComponent,
    ManageStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
    AgGridModule.withComponents([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
