import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Sobre } from './components/sobre/sobre'

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "home",
        component: Home
    },
    {
        path: "sobre",
        component: Sobre
    }
];
