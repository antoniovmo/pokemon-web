import {createReducer, on}  from "@ngrx/store";

// Interfaces
import {PokemonState} from "../../interfaces/pokemon.state";

// Actions
import {fetchedPokemonList, isLoading} from "../actions/pokemon.actions";

export const initialState: PokemonState = {
  loading: false, pokemon: []
}

export const pokemonReducer = createReducer(
  initialState,
  on(isLoading, (state) => {
    return { ...state, loading: true }
  }),
  on(fetchedPokemonList, (state, {pokemon}) => {
    return { ...state, loading: false, pokemon }
  })
);
