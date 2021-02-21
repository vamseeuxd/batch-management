import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'faculties', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Batch Management | Dashboard', menuTitle: 'Dashboard' },
  },
  {
    path: 'batches',
    loadChildren: () =>
      import('./pages/batches/page.module').then((m) => m.PageModule),
    data: { title: 'Batch Management | Batches', menuTitle: 'Batches' },
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./pages/students/page.module').then((m) => m.PageModule),
    data: { title: 'Batch Management | Students', menuTitle: 'Students' },
  },
  {
    path: 'technologies',
    loadChildren: () =>
      import('./pages/technologies/page.module').then((m) => m.PageModule),
    data: {
      title: 'Batch Management | Technologies',
      menuTitle: 'Technologies',
    },
  },
  {
    path: 'faculties',
    data: {
      title: 'Batch Management | Faculties',
      menuTitle: 'Faculties',
    },
    loadChildren: () =>
      import('./pages/faculties/page.module').then((m) => m.PageModule),
  },
  {
    path: 'sessions',
    data: {
      title: 'Batch Management | Sessions',
      menuTitle: 'Sessions',
    },
    loadChildren: () =>
      import('./pages/sessions/page.module').then((m) => m.PageModule),
  },
  {
    path: 'topics',
    data: {
      title: 'Topics',
      menuTitle: 'Topics',
    },
    loadChildren: () =>
      import('./pages/topics/page.module').then((m) => m.PageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
