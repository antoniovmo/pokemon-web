import {PokemonState} from "../interfaces/pokemon.state";
import {ActionReducerMap} from "@ngrx/store";

// Reducer
import {pokemonReducer} from "./reducers/pokemon.reducer";

export interface AppState {
  pokemon: PokemonState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  pokemon: pokemonReducer
}
