import { Routes } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ContainerComponent } from './container/container.component';

export const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      { path: 'calendario', component: CalendarioComponent },
      { path: 'detalhes', component: DetalhesComponent },
      { path: '', redirectTo: '/calendario', pathMatch: 'full' },
    ],
  },
];
