import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [PageComponent],
  imports: [PageRoutingModule, SharedModule],
})
export class PageModule {}
