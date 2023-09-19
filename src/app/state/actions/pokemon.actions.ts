import {createAction, props} from "@ngrx/store";

// Interfaces
import {ResultPokemon} from "../../interfaces/pokemon";

export const isLoading = createAction(
  '[PokeAPI] is loading'
);

export const fetchedPokemonList= createAction(
  '[PokeAPI] items loaded successfully',
  props<{pokemon: ResultPokemon[]}>()
);
