import {Component, inject, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Router} from "@angular/router";

// Services
import {PokemonService} from "../../services/pokemon.service";

// Interfaces
import {ResultPokemon} from "../../interfaces/pokemon";

// Components
import {SearchPokemonComponent} from "./search-pokemon/search-pokemon.component";

// RxJs
import {Observable} from "rxjs";

// States
import {AppState} from "../../state/app.state";

// NgRx
import {Store} from "@ngrx/store";
import {selectLoading, selectPokemonList} from "../../state/selectors/pokemon.selector";
import {fetchedPokemonList, isLoading} from "../../state/actions/pokemon.actions";

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, SearchPokemonComponent],
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
  pokemon$: Observable<any> = new Observable();

  search = '';

  mArray: Array<ResultPokemon> = new Array<ResultPokemon>

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

/*    this.pokemon.fetchAllPokemon().subscribe( rPokemon => {
      this.mArray = [...rPokemon]
    })*/
  }

  filterPokemonList(rSearch: string) {
    this.search = rSearch;
  }


  navigateTo(url: string) {
    this.router.navigate([url]);
  }
}
