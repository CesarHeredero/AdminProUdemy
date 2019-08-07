import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';

import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DasboadComponent } from './dasboad/dasboad.component';

import { PAGES_ROUTES } from './pages.routes';




@NgModule({
  declarations: [
    PagesComponent,
    DasboadComponent,
    ProgressComponent,
    Graficas1Component
  ],
  exports: [
    DasboadComponent,
    ProgressComponent,
    Graficas1Component
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ]
})
export class PagesModule { }
