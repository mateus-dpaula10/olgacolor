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
        loadComponent: () => import('./pages/processes-production/extrusion/extrusion.component').then(mod => mod.ExtrusionComponent) 
    },
    { 
        path: 'processos-producao/anodizacao', 
        loadComponent: () => import('./pages/processes-production/anodizing/anodizing.component').then(mod => mod.AnodizingComponent) 
    },
    { 
        path: 'processos-producao/pintura', 
        loadComponent: () => import('./pages/processes-production/painting/painting.component').then(mod => mod.PaintingComponent) 
    },
    { 
        path: 'processos-producao/jateamento', 
        loadComponent: () => import('./pages/processes-production/blasting/blasting.component').then(mod => mod.BlastingComponent) 
    },
    { 
        path: 'processos-producao/polimento', 
        loadComponent: () => import('./pages/processes-production/polishing/polishing.component').then(mod => mod.PolishingComponent) 
    },
    { 
        path: 'processos-producao/usinagem', 
        loadComponent: () => import('./pages/processes-production/machining/machining.component').then(mod => mod.MachiningComponent) 
    },
    { 
        path: 'mercados', 
        loadComponent: () => import('./pages/markets/markets.component').then(mod => mod.MarketsComponent) 
    },
    { 
        path: 'perfis', 
        loadComponent: () => import('./pages/profiles/profiles.component').then(mod => mod.ProfilesComponent) 
    },
];
