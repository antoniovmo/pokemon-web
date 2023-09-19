import {createSelector} from "@ngrx/store";
import {AppState} from "../app.state";
import {PokemonState} from "../../interfaces/pokemon.state";


export const selectPokemonFeature = (state: AppState) => state.pokemon;

export const selectLoading = createSelector(
  selectPokemonFeature, (state: PokemonState) => state.loading
)

export const selectPokemonList = createSelector(
  selectPokemonFeature, (state: PokemonState) => state.pokemon
)

