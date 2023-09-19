import { Routes } from '@angular/router';

// Components
import {PagesComponent} from "./pages.component";

export const PagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children : [
      {
        path: 'pokemon-list',
        title: 'Pokemon List',
        loadComponent: () => import('./pokemon/pokemon.component')
          .then(m => m.PokemonComponent),
      },
      {
        path: 'pokemon-view/:id',
        title: 'Pokemon View',
        loadComponent: () => import('./pokemon/view-pokemon/view-pokemon.component')
          .then(m => m.ViewPokemonComponent),
      },
      {
        path: '**',
        redirectTo: 'pokemon-list'
      }
    ]
  }
];
