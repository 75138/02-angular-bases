import { Injectable } from '@angular/core';
import { ICharacter } from "../interfaces/icharacter";
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: ICharacter[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    }, {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },{
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }, {
      id: uuid(),
      name: 'Trunks',
      power: 10
    }, {
      id: uuid(),
      name: 'Broly',
      power: 10000000
    }
  ];

  onNewCharacter(character: ICharacter): void {
    this.characters.push({ ...character })
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter((character) => character.id !== id)
  }
}
