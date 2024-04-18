import { Component, OnInit } from '@angular/core';
import { PokemonData } from './models/pokemon.model';
import { DataService } from './services/data.service';
import { response } from 'express';
import { FlavorTextEntry, PokemonEntryData } from './models/entry.model';
import { find, max } from 'rxjs';
import { app } from '../../server';
import { of } from 'rxjs';
import { STRING_TYPE } from '@angular/compiler';
import { stringify } from 'querystring';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})

export class AppComponent implements OnInit {

  constructor(private dataService: DataService){

  }

  pokemonId: string | number = '';
  pokemonData?: PokemonData;
  pokemonEntry?: PokemonEntryData;
  flash: string = 'background-color: #27a9fb;';
  entry: string | undefined = '';
  
  
  ngOnInit(): void {
    this.pokemonId = Math.floor(Math.random() * (1025 - 1 + 1)) + 1;
    this.getPokemonInfo(this.pokemonId);
    this.pokemonId = '';
    this.pokemonData!.types[1].type.name = '';
  }

  onSubmit() {
    this.getPokemonInfo(this.pokemonId);
    this.pokemonId = '';
    this.pokemonData!.types[1].type.name = '';
  }

  onRandom() {
    this.pokemonId = Math.floor(Math.random() * (1025 - 1 + 1)) + 1;
    this.getPokemonInfo(this.pokemonId);
    this.pokemonId = '';
    this.pokemonData!.types[1].type.name = '';
  }

  up() {
    this.pokemonId = this.pokemonData!.id + 1;
    this.onSubmit();
  }

  down() {
    this.pokemonId = this.pokemonData!.id - 1;
    this.onSubmit();
  }

  private getPokemonInfo(pokemonName: string | number) {
    this.dataService.getPokemonData(pokemonName)
    .subscribe({
      next: (response) => {
        this.pokemonData = response;
        console.log(response);
      }
    })
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

}



// ngOnInit(): void {
//   this.getWeatherData(this.cityName);
//   this.cityName = '';   
// }

// onSubmit() {
//   this.getWeatherData(this.cityName);
//   this.cityName = '';
// }

// private getWeatherData(cityName: string) {
//   this.WeatherService.getWeatherData(cityName)
//   .subscribe({
//     next: (response) => {
//       this.weatherData = response;
//       console.log(response);

//     }
//   });
// }

// title = 'weather-app-2';
// }
//   ngOnInitEntry(): void {
//     this.dataService.getPokemonEntry('lapras')
//     .subscribe({
//       next: (response) => {
//         this.pokemonEntry = response;
//         console.log(response);
//       }
//     })
//   }
// }
