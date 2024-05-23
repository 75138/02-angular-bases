import { Component, OnInit } from '@angular/core';
import { DbzService } from "../services/dbz.service";
import { ICharacter } from "../interfaces/icharacter";

@Component( {
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
} )
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characters(): ICharacter[] {
    return [...this.dbzService.characters]
  }

  onDeleteCharacterById(id:string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character:ICharacter):void {
    this.dbzService.onNewCharacter(character)
  }
}
