import { Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';

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
        path: 'mercados/todos-mercados', 
        canActivate: [authGuard],
        loadComponent: () => import('./pages/markets/all-markets/all-markets.component').then(mod => mod.AllMarketsComponent) 
    },
    { 
        path: 'mercados/adicionar-mercados', 
        canActivate: [authGuard],
        loadComponent: () => import('./pages/markets/add-markets/add-markets.component').then(mod => mod.AddMarketsComponent) 
    },
    { 
        path: 'mercados/construcao-civil', 
        loadComponent: () => import('./pages/civil-construction/civil-construction.component').then(mod => mod.CivilConstructionComponent) 
    },
    { 
        path: 'mercados/envidracamento', 
        loadComponent: () => import('./pages/glazing/glazing.component').then(mod => mod.GlazingComponent) 
    },
    { 
        path: 'mercados/linha-moveleira', 
        loadComponent: () => import('./pages/furniture-line/furniture-line.component').then(mod => mod.FurnitureLineComponent) 
    },
    { 
        path: 'mercados/linha-industrial', 
        loadComponent: () => import('./pages/industrial-line/industrial-line.component').then(mod => mod.IndustrialLineComponent) 
    },
    {
        path: 'mercados/categorias',
        loadComponent: () => import('./pages/markets/categories/categories.component').then(mod => mod.CategoriesComponent)
    },
    { 
        path: 'perfis', 
        loadComponent: () => import('./pages/profiles/profiles.component').then(mod => mod.ProfilesComponent) 
    },
    { 
        path: 'acabamentos', 
        loadComponent: () => import('./pages/finishes/finishes.component').then(mod => mod.FinishesComponent) 
    },
    { 
        path: 'informativo', 
        loadComponent: () => import('./pages/informative/informative.component').then(mod => mod.InformativeComponent) 
    },
    { 
        path: 'contato', 
        loadComponent: () => import('./pages/contact/contact.component').then(mod => mod.ContactComponent) 
    },
    { 
        path: 'catalogos', 
        loadComponent: () => import('./pages/catalogs/catalogs.component').then(mod => mod.CatalogsComponent) 
    },
    { 
        path: 'lme', 
        loadComponent: () => import('./pages/lme/lme.component').then(mod => mod.LmeComponent) 
    },
    { 
        path: 'produtos', 
        loadComponent: () => import('./pages/products/products.component').then(mod => mod.ProductsComponent) 
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(mod => mod.LoginComponent)
    }
];
