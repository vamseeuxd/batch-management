import { NgModule, ModuleWithProviders } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AgGridModule } from 'ag-grid-angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { CommonModule } from '@angular/common';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { CollapseModule } from 'ngx-bootstrap/collapse';

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
  exports: [
    CommonModule,
    AccordionModule,
    BsDropdownModule,
    ButtonsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule,
    AgGridModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    CollapseModule,
    TypeaheadModule,
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
    AgGridModule.withComponents([]),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    TypeaheadModule.forRoot(),
  ],
  declarations: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
