import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { DeleteComponent } from './modals/delete/delete.component';
import { ManageComponent } from './modals/manage/manage.component';
import { ShowDetailsComponent } from './modals/show-details/show-details.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [
    PageComponent,
    DeleteComponent,
    ManageComponent,
    ShowDetailsComponent,
  ],
  imports: [PageRoutingModule, SharedModule],
})
export class PageModule {}
