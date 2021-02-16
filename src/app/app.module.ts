import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { HeaderComponent } from './components/app-header/header.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { PageNavigatorComponent } from './components/page-navigator/page-navigator.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BatchesComponent } from './pages/batches/batches.component';
import { StudentsComponent } from './pages/students/students.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ManageBatchesComponent } from './modals/manage-batches/manage-batches.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { FacultiesComponent } from './pages/faculties/page.component';
import { ManageStudentsComponent } from './modals/manage-students/manage-students.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ManageFacultyComponent } from './pages/faculties/modals/manage/manage.component';
import { DeleteFacultyComponent } from './pages/faculties/modals/delete/delete.component';
import { ShowFacultyDetailsComponent } from './pages/faculties/modals/show-details/show-details.component';

const maskConfig: Partial<IConfig> = {
  validation: true,
};

const config = {
  apiKey: 'AIzaSyDwl5J6nVd1vMEeA5twlUXI3eRUYgajzGM',
  authDomain: 'arrow-erp.firebaseapp.com',
  databaseURL: 'https://arrow-erp.firebaseio.com',
  projectId: 'arrow-erp',
  storageBucket: 'arrow-erp.appspot.com',
  messagingSenderId: '294771130503',
  appId: '1:294771130503:web:cca09ce66a7faf7b2af822',
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
    ManageStudentsComponent,
    ManageFacultyComponent,
    DeleteFacultyComponent,
    ShowFacultyDetailsComponent,
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
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
