import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { PokemonData } from '../models/pokemon.model';
import { PokemonEntryData } from '../models/entry.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPokemonData(pokemonId: string | number): Observable<PokemonData> {
    return this.http.get<PokemonData>(environment.pokemonApiBaseUrl+'pokemon/'+pokemonId, {

    })
  }

  getPokemonEntry(pokemonId: string | number): Observable<PokemonEntryData> {
    return this.http.get<PokemonEntryData>(environment.pokemonApiBaseUrl+'pokemon-species/'+pokemonId, {

    })
  }
}
