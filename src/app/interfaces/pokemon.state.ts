import {ResultPokemon} from "./pokemon";

export interface PokemonState {
  loading: boolean,
  pokemon: ReadonlyArray<ResultPokemon>
}
