import { Pipe, PipeTransform } from '@angular/core';

// Interfaces
import {ResultPokemon} from "../interfaces/pokemon";

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform( rPokemon: ResultPokemon[], page = 0, search = ''): ResultPokemon[] {

    if ( search.length === 0 )
      return rPokemon.slice(page, page + 10);

    const filterArray = rPokemon.filter( res => res.name.includes(search));
    return filterArray.slice(page, page + 10);
  }

}
