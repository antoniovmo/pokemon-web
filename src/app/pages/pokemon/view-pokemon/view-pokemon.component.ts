import {Component, inject, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

// Router
import {ActivatedRoute, Router} from "@angular/router";

// Services
import {PokemonService} from "../../../services/pokemon.service";

// Interfaces
import {Pokemon} from "../../../interfaces/pokemon";

@Component({
  selector: 'app-view-pokemon',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './view-pokemon.component.html',
  styleUrls: ['./view-pokemon.component.css']
})
export class ViewPokemonComponent implements OnInit {


  // Router
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);

  // Service
  pokemon = inject(PokemonService);

  // Global object
  mPokemon!: Pokemon;
  ngOnInit(): void {
    this.activeRoute.params.subscribe((res) => {
      this.pokemon.fetchPokemonInformation(res["id"]).subscribe((rPokemon: any) => {
        this.transformResultPokemon(rPokemon)
      });
    });
  }

  private transformResultPokemon(rPokemon: Pokemon){
    this.mPokemon = rPokemon

    this.mPokemon.evolution_chain = this.mPokemon.evolution_chain?.filter(element => {
      return Object.keys(element).length !== 0;
    });

    this.mPokemon.evolution_chain.forEach(element => {
      element.url = element.url!.split('/')[6]
    })
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }

}
