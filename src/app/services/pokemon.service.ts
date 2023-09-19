import { Injectable } from '@angular/core';

// Http
import {HttpClient} from "@angular/common/http";

// RxJs
import {AjaxError} from "rxjs/internal/ajax/errors";
import {catchError, concatMap, map, Observable, of, zip} from "rxjs";

// Interfaces
import {FetchAllPokemon, ResultPokemon} from "../interfaces/pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) { }

  private url = 'https://pokeapi.co/api/v2';

  fetchURL = ( url: string) => this.http.get<any>(url)

  catchErrors = (err: AjaxError) => {
    console.warn('error: ', err)
    return of([])
  }

  fetchAllPokemon(): Observable<ResultPokemon[]> {
    return this.http.get<FetchAllPokemon>(`${ this.url }/pokemon?limit=100`)
      .pipe(map( this.transformResultPokemon ),catchError(this.catchErrors))
  }

  private transformResultPokemon( rPokemon: FetchAllPokemon) : ResultPokemon[] {
    return rPokemon.results.map( tPokemon => {
      return {
        id: tPokemon.url!.split('/')[6],
        name: tPokemon.name,
      }
    });
  }


  fetchPokemonInformation(id: string){
    return this.fetchURL(`${ this.url }/pokemon/${id}`).pipe(
      map(res => ({ id: res.id, name: res.name, base_experience: res.base_experience, weight: res.weight, height: res.height, url: res.species.url})),
      concatMap(res =>
        zip( of(res), this.fetchURL(res.url).pipe(
          concatMap(res2 =>  this.fetchURL(res2.evolution_chain.url)
            .pipe(
              map( res => res.chain.evolves_to[0]),
              map( res => ({ evolution_chain:  [res.species,  res.evolves_to[0] ?  res.evolves_to[0].species : {}]})) ,
            )
          ))
        )
      ),map( res => ({...res[0], ...res[1]})), catchError(this.catchErrors))
  }


}
