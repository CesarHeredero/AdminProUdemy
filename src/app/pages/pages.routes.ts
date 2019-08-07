import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';

import { DasboadComponent } from './dasboad/dasboad.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';


const pagesRoutes: Routes = [
  {
      path: '',
      component: PagesComponent,
      children: [
         { path: 'dasboad', component: DasboadComponent},
         { path: 'progress', component: ProgressComponent},
        { path: 'graficas1', component: Graficas1Component},
        { path: '', redirectTo: '/dasboad', pathMatch: 'full' },
      ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
