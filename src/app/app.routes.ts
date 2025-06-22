import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './component/about/about';

export const routes: Routes = [
    // {path: '', redirectTo: '/home', pathMatch: 'full'},
    // {path: 'home', component: Home}, 
    // {path: 'about/:id', component: About},

    {
        path: '',
        loadComponent: () => import('./home/home').then(m => Home),
    },
     {
        path: 'about',
        loadComponent: () => import('./component/about/about').then(m => m.About),
    },
     {
        path: 'admin',
        loadComponent: () => import('./admin/admin').then(m => m.Admin),
    },
     {
        path: 'courses',
        loadComponent: () => import('./courses/courses').then(m => m.Courses),
    }
];
