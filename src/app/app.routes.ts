import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pagina-inicial'
    },
    { 
        path: 'pagina-inicial', 
        loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent) 
    },
    { 
        path: 'tecnologia', 
        loadComponent: () => import('./pages/technology/technology.component').then(mod => mod.TechnologyComponent) 
    },
    { 
        path: 'processos-producao', 
        loadComponent: () => import('./pages/processes-production/processes-production.component').then(mod => mod.ProcessesProductionComponent) 
    },
];
