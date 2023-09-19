export interface Pokemon {
  id: string;
  name: string;
  base_experience: number
  weight: number
  height: number
  evolution_chain: ResultPokemon[]
}

export interface ResultPokemon {
  id?: string;
  name: string;
  url?: string;
}

export interface FetchAllPokemon {
  count:    number;
  results:  ResultPokemon[];
}
