import { Component, OnInit } from '@angular/core';
import { PokemonData } from './models/pokemon.model';
import { DataService } from './services/data.service';
import { response } from 'express';
import { PokemonEntryData } from './models/entry.model';
import { max } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})


export class AppComponent implements OnInit {


  constructor(private dataService: DataService){

  }

  pokemonId: string | number = 'lapras';
  pokemonData?: PokemonData;
  pokemonEntry?: PokemonEntryData;
  


  ngOnInit(): void {
    this.getPokemonInfo(this.pokemonId);
    this.pokemonId = '';
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
        console.log(response_2)
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
