import { Component, EventEmitter, Output } from '@angular/core';
import { ICharacter } from "../../interfaces/icharacter";
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './dbz-add-character.component.html',
  styleUrl: './dbz-add-character.component.css'
})
export class DbzAddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<ICharacter> = new EventEmitter();

  public character: ICharacter = {
    id: '',
    name: '',
    power: 0
  };

  emitCharacter(): void {
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit({
      id: uuid(),
      name: this.character.name,
      power: this.character.power
    });
    this.character = { id: '', name: '', power: 0 };
  }
}
