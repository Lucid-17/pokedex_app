import { Component, OnInit } from '@angular/core';
import { PokemonData } from './models/pokemon.model';
import { DataService } from './services/data.service';
import { PokemonEntryData } from './models/entry.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  
  constructor(private dataService: DataService){}
  
  pokemonId: number | string = '';
  pokemonData?: PokemonData;
  pokemonEntry?: PokemonEntryData;
  flash: string = 'background-color: #27a9fb;';
  entry: string | undefined = '';
  secondaryType: string | undefined = '';

  populateSearch(num: number): void {
    this.pokemonId += `${num}`;
  }
   
  ngOnInit(): void {
    this.onRandom();
  }

  onSubmit(): void {
    if (this.pokemonId) {
      this.getPokemonInfo(this.pokemonId);
      this.getPokedexEntry(this.pokemonId);
      if (this.pokemonData!.types.length > 1) {
        this.secondaryType = this.pokemonData?.types[1].type.name
      };
      this.pokemonId = '';
    }
  }

  onRandom(): void {
    this.pokemonId = Math.floor(Math.random() * (1025 - 1 + 1)) + 1;
    this.getPokemonInfo(this.pokemonId);
    this.getPokedexEntry(this.pokemonId);
    this.pokemonId = '';
  }

  up(): void {
    this.pokemonId = this.pokemonData!.id + 1;
    this.onSubmit();
  }

  down(): void {
    this.pokemonId = this.pokemonData!.id - 1;
    this.onSubmit();
  }

  getPokemonInfo(pokemonName: string | number): void {
    this.dataService.getPokemonData(pokemonName).subscribe({
      next: (response) => {
        this.pokemonData = response;
        console.log(response);
        if (this.pokemonData.types.length > 1) {
          this.secondaryType = this.pokemonData.types[1].type.name;
        } else {
          this.secondaryType = '';
        }
      }
    })
  }

  getPokedexEntry(pokemonName: string | number): void {
    this.dataService.getPokemonEntry(pokemonName)
    .subscribe({
      next: (response_2) => {
        this.pokemonEntry = response_2;
        console.log(response_2);
        if(this.pokemonEntry!.flavor_text_entries[0].language.name != "en"){
          for(let i=0; i<this.pokemonEntry.flavor_text_entries.length; i++) {
            if(this.pokemonEntry.flavor_text_entries[i].language.name == 'en'){
              this.entry = this.pokemonEntry.flavor_text_entries[i].flavor_text.normalize().replaceAll('\n', ' ').replaceAll('\u000c',' ');
            }
          };
        }
        else {
          this.entry = this.pokemonEntry!.flavor_text_entries[0].flavor_text.normalize().replaceAll('\n', ' ').replaceAll('\u000c',' ');
        };
      }
    })
  }

  title = 'pokedex-app'

}
