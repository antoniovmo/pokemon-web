import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import {of} from "rxjs";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FetchAllPokemon, ResultPokemon} from "../interfaces/pokemon";

describe('PokemonService', () => {

  let service: PokemonService;
  let httpClientSpy: { get: jasmine.Spy}

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PokemonService);

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new PokemonService(httpClientSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fetch all pokemon should get status 200 OK', (done: DoneFn) => {

    let mockAllPokemon: FetchAllPokemon = {
      "count": 1281,
      "results": [
        {
          "name": "bulbasaur",
          "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
          "name": "ivysaur",
          "url": "https://pokeapi.co/api/v2/pokemon/2/"
        }
      ]
    }

    let mockResultPokemon: ResultPokemon[] = [
      {
        "id": "1",
        "name": "bulbasaur",

      },
      {
        "id": "2",
        "name": "ivysaur",
      }
    ]


    httpClientSpy.get.and.returnValue(of(mockAllPokemon))

    service.fetchAllPokemon().subscribe( (pokemon) => {
      expect(pokemon).toEqual(mockResultPokemon)
      done()
    })
  });

});
