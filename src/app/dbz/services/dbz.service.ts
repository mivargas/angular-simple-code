import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }
  ];

  addCharacter(character: Character): void {
    console.log('Main');
    console.log(character);

    character.id = uuid(); // o const newCharacter = {uuid(), ...character}; this.characters.push(newCharacter);
    this.characters.push(character);

  }

  /* onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  } */

  deleteCharacterById(id: string): void {

    console.log(id);

    this.characters = this.characters.filter(chracter => chracter.id !== id)

  }

}
