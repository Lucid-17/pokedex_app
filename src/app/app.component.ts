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
  
  pokemonId: string | number = '';
  pokemonData?: PokemonData;
  pokemonEntry?: PokemonEntryData;
  flash: string = 'background-color: #27a9fb;';
  entry: string | undefined = '';

  addZero(){
    this.pokemonId += '0';
  };
  addOne(){
    this.pokemonId += '1';
  }; 
  addTwo(){
    this.pokemonId += '2';
  }; 
  addThree(){
    this.pokemonId += '3';
  }; 
  addFour(){
    this.pokemonId += '4';
  }; 
  addFive(){
    this.pokemonId += '5';
  }; 
  addSix(){
    this.pokemonId += '6';
  }; 
  addSeven(){
    this.pokemonId += '7';
  }; 
  addEight(){
    this.pokemonId += '8';
  }; 
  addNine(){
    this.pokemonId += '9';
  }; 
   
  ngOnInit(): void {
    this.pokemonId = '';
    this.pokemonId = Math.floor(Math.random() * (1025 - 1 + 1)) + 1;
    this.getPokemonInfo(this.pokemonId);
    this.pokemonId = '';
    this.pokemonData!.types[1].type.name = '';
  }

  onSubmit() {
    this.getPokemonInfo(this.pokemonId);
    this.pokemonData!.types[1].type.name = '';
    this.pokemonId = '';
    
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
  title = 'pokedex-app'

}