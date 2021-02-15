import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {BatchesComponent} from './pages/batches/batches.component';
import {StudentsComponent} from './pages/students/students.component';
import {TechnologiesComponent} from './pages/technologies/technologies.component';
import {FacultiesComponent} from './pages/faculties/faculties.component';

export const routes: Routes = [
  {path: '', redirectTo: 'faculties', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, data: {title: 'Batch Management | Dashboard', menuTitle: 'Dashboard'}},
  {path: 'batches', component: BatchesComponent, data: {title: 'Batch Management | Batches', menuTitle: 'Batches'}},
  {path: 'students', component: StudentsComponent, data: {title: 'Batch Management | Students', menuTitle: 'Students'}},
  {path: 'technologies', component: TechnologiesComponent, data: {title: 'Batch Management | Technologies', menuTitle: 'Technologies'}},
  {path: 'faculties', component: FacultiesComponent, data: {title: 'Batch Management | Faculties', menuTitle: 'Faculties'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
