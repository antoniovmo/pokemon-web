import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

// RxJs
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

// Service
import {PokemonService} from "../../services/pokemon.service";


@Injectable()
export class PokemonEffects {

  loadPokemon$ = createEffect(() => this.actions$.pipe(
      ofType('[PokeAPI] is loading'),
      exhaustMap(() => this.pokemon.fetchAllPokemon()
        .pipe(
          map(rPokemon => ({ type: '[PokeAPI] items loaded successfully', pokemon: rPokemon })),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(private actions$: Actions, private pokemon: PokemonService) {}
}
