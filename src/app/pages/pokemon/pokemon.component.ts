import {Component, inject, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Router} from "@angular/router";

// Services
import {PokemonService} from "../../services/pokemon.service";

// Components
import {SearchPokemonComponent} from "./search-pokemon/search-pokemon.component";

// RxJs
import {BehaviorSubject, Observable, Subject} from "rxjs";

// States
import {AppState} from "../../state/app.state";

// NgRx
import { Store } from "@ngrx/store";
import { selectLoading, selectPokemonList } from "../../state/selectors/pokemon.selector";
import { isLoading} from "../../state/actions/pokemon.actions";

// Filter
import {FilterPipe} from "../../pipes/filter.pipe";

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, SearchPokemonComponent, FilterPipe],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  // Service
  pokemon = inject(PokemonService);

  // Router
  router = inject(Router);

  // NgRx
  store = inject(Store<AppState>);
  loading$: Observable<boolean> = new Observable();
  pokemon$: Observable<any> = new BehaviorSubject([]);

  // Filter parameters
  page = 0;
  search = '';

  ngOnInit(): void {
    this.initPokemonList()
  }

  initLoading() {
    this.loading$ = this.store.select(selectLoading)
    this.store.dispatch(isLoading())
  }

  initPokemonList() {
    this.initLoading()
    this.pokemon$ = this.store.select(selectPokemonList)
  }

  filterPokemonList(rSearch: string) {
    this.search = rSearch;
  }

  nextPage() {
    this.page += 5;
  }

  prevPage() {
    if ( this.page > 0 )
      this.page -= 5;
  }


  navigateTo(url: string) {
    this.router.navigate([url]);
  }
}
