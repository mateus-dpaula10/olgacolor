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
    { 
        path: 'processos-producao/extrusao', 
        loadComponent: () => import('./pages/processes-production/extrusao/extrusao.component').then(mod => mod.ExtrusaoComponent) 
    },
    { 
        path: 'processos-producao/anodizacao', 
        loadComponent: () => import('./pages/processes-production/anodizing/anodizing.component').then(mod => mod.AnodizingComponent) 
    },
];
